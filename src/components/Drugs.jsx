import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { buyDrugs } from '../actions';
import Header from './Header';
import { commatize } from './utils';

class Drugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localInventory: Object.assign({}, this.props.game.inventory),
    };
  }
  setInventory(drugName, value) {
    const preventInventoryChange = (
      value < 0
      || (this.getTotal(drugName, value) > this.props.game.balance)
      || (this.getCapacity(drugName, value) > this.props.game.capacity)
    );
    if (preventInventoryChange) {
      return;
    }

    const localInventory = Object.assign({}, this.state.localInventory);
    localInventory[drugName] = value;
    this.setState({
      localInventory
    });
  }
  getItemSubtotal(drugName, valueOverride) {
    const currentValue = this.props.game.inventory[drugName] || 0;
    const updatedValue = valueOverride || this.state.localInventory[drugName] || 0;
    return (currentValue - updatedValue) * -1 * this.props.game.drugs[drugName].price;
  }
  getTotal(drugOverride, valueOverride) {
    return Object.keys(this.props.game.drugs).reduce((subtotal, drug) => {
      if (drugOverride && drug === drugOverride) {
        return subtotal + this.getItemSubtotal(drug, valueOverride);
      }
      return subtotal + this.getItemSubtotal(drug);
    }, 0);
  }
  getCapacity(drugOverride, valueOverride) {
    return Object.keys(this.props.game.drugs).reduce((subtotal, drug) => {
      if (drugOverride && drug === drugOverride) {
        return subtotal + valueOverride;
      }
      return subtotal + (this.state.localInventory[drug] || 0);
    }, 0);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.buyDrugs(this.state.localInventory, this.getTotal());
  }
  drugList() {
    return Object.keys(this.props.game.drugs).map((drugName) => {
      const drug = this.props.game.drugs[drugName];
      const subtotal = this.getItemSubtotal(drugName);
      let subtotalClass = '';
      if (subtotal > 0) {
        subtotalClass = 'buy';
      } else if (subtotal < 0) {
        subtotalClass = 'sell';
      }
      return (
        <tr key={`drug-${drugName}`}>
          <td className="drug">{drugName}</td>
          <td className="price">{commatize(drug.price)}</td>
          <td className="inventory">{commatize(this.props.game.inventory[drugName] || 0)}</td>
          <td className="input">
            <input
              type="number"
              value={this.state.localInventory[drugName] || 0}
              onChange={e => this.setInventory(drugName, parseInt(e.target.value, 10))} />
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
      <div className="drugs">
        <h2>What do you want to buy?</h2>
        <Header />
        <form onSubmit={e => this.handleSubmit(e)}>
          <table>
            <thead>
              <tr>
                <th className="drug">Drug</th>
                <th className="price">Price</th>
                <th className="inventory">Current inventory</th>
                <th className="input">Buy/Sell</th>
                <th className="subtotal">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {this.drugList()}
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

Drugs.displayName = 'Drugs';
Drugs.propTypes = {
  actions: PropTypes.shape({
    buyDrugs: PropTypes.func.isRequired,
  }),
  game: PropTypes.shape({
    balance: PropTypes.number,
    inventory: PropTypes.object,
    capacity: PropTypes.number,
    drugs: PropTypes.object,
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
      buyDrugs,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Drugs);
