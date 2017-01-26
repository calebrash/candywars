import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { commatize } from './utils';

class Header extends React.Component {
  render() {
    const inventoryTotal = Object.keys(this.props.game.inventory)
      .reduce((total, candy) => total + this.props.game.inventory[candy], 0);
    return (
      <div className="header">
        <span>Day {this.props.game.day}</span>
        <span>${commatize(this.props.game.balance)}</span>
        <span>Coat: {this.props.game.capacity - inventoryTotal}</span>
      </div>
    );
  }
}

Header.displayName = 'Header';
Header.propTypes = {
  game: PropTypes.shape({
    day: PropTypes.number,
    balance: PropTypes.number,
    inventory: PropTypes.object,
    capacity: PropTypes.number,
  }),
};

function mapStateToProps(state) {
  return {
    game: state.game
  };
}

export default connect(mapStateToProps)(Header);
