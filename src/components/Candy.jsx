import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { buyCandy } from '../actions';
import Header from './Header';
import { commatize } from './utils';

class Candy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localInventory: Object.assign({}, this.props.game.inventory),
    };
  }
  setInventory(candyName, value) {
    const preventInventoryChange = (
      value < 0
      || (this.getTotal(candyName, value) > this.props.game.balance)
      || (this.getCapacity(candyName, value) > this.props.game.capacity)
    );
    if (preventInventoryChange) {
      return;
    }

    const localInventory = Object.assign({}, this.state.localInventory);
    localInventory[candyName] = value;
    this.setState({
      localInventory
    });
  }
  getItemSubtotal(candyName, valueOverride) {
    const currentValue = this.props.game.inventory[candyName] || 0;
    const updatedValue = valueOverride || this.state.localInventory[candyName] || 0;
    return (currentValue - updatedValue) * -1 * this.props.game.candy[candyName].price;
  }
  getTotal(candyOverride, valueOverride) {
    return Object.keys(this.props.game.candy).reduce((subtotal, candy) => {
      if (candyOverride && candy === candyOverride) {
        return subtotal + this.getItemSubtotal(candy, valueOverride);
      }
      return subtotal + this.getItemSubtotal(candy);
    }, 0);
  }
  getCapacity(candyOverride, valueOverride) {
    return Object.keys(this.props.game.candy).reduce((subtotal, candy) => {
      if (candyOverride && candy === candyOverride) {
        return subtotal + valueOverride;
      }
      return subtotal + (this.state.localInventory[candy] || 0);
    }, 0);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.buyCandy(this.state.localInventory, this.getTotal());
  }
  candyList() {
    return Object.keys(this.props.game.candy).map((candyName) => {
      const candy = this.props.game.candy[candyName];
      const subtotal = this.getItemSubtotal(candyName);
      let subtotalClass = '';
      if (subtotal > 0) {
        subtotalClass = 'buy';
      } else if (subtotal < 0) {
        subtotalClass = 'sell';
      }
      return (
        <tr key={`candy-${candyName}`}>
          <td className="candy">{candyName}</td>
          <td className="price">{commatize(candy.price)}</td>
          <td className="inventory">{commatize(this.props.game.inventory[candyName] || 0)}</td>
          <td className="input">
            <input
              type="number"
              value={this.state.localInventory[candyName] || 0}
              onChange={e => this.setInventory(candyName, parseInt(e.target.value, 10))} />
          </td>
          <td className="subtotal">
            <span className={subtotalClass}>{commatize(Math.abs(subtotal))}</span>
          </td>
        </tr>
      );
    });
  }
  render() {
    const total = this.getTotal();
    let totalClass = '';
    if (total > 0) {
      totalClass = 'buy';
    } else if (total < 0) {
      totalClass = 'sell';
    }
    return (
      <div className="candy">
        <h2>What do you want to buy?</h2>
        <Header />
        <form onSubmit={e => this.handleSubmit(e)}>
          <table>
            <thead>
              <tr>
                <th className="candy">Candy</th>
                <th className="price">Price</th>
                <th className="inventory">Current inventory</th>
                <th className="input">Buy/Sell</th>
                <th className="subtotal">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {this.candyList()}
              <tr className="total">
                <td colSpan="4">Total</td>
                <td>
                  <span className={totalClass}>{commatize(Math.abs(total))}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn" type="submit">Done</button>
        </form>
      </div>
    );
  }
}

Candy.displayName = 'Candy';
Candy.propTypes = {
  actions: PropTypes.shape({
    buyCandy: PropTypes.func.isRequired,
  }),
  game: PropTypes.shape({
    balance: PropTypes.number,
    inventory: PropTypes.object,
    capacity: PropTypes.number,
    candy: PropTypes.object,
  }),
};

function mapStateToProps(state) {
  return {
    game: state.game
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      buyCandy,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Candy);
