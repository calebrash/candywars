import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { commatize } from './utils';

class Header extends React.Component {
  render() {
    const inventoryTotal = Object.keys(this.props.gameReducer.inventory)
      .reduce((total, drug) => total + this.props.gameReducer.inventory[drug], 0);
    return (
      <div className="header">
        <span>Day: {this.props.gameReducer.day}</span>
        <span>Cash: {commatize(this.props.gameReducer.balance)}</span>
        <span>Capacity: {this.props.gameReducer.capacity - inventoryTotal}</span>
      </div>
    );
  }
}

Header.displayName = 'Header';
Header.propTypes = {
  gameReducer: PropTypes.shape({
    day: PropTypes.number,
    balance: PropTypes.number,
    inventory: PropTypes.object,
    capacity: PropTypes.number,
  }),
};

function mapStateToProps(state) {
  return {
    gameReducer: state.gameReducer
  };
}

export default connect(mapStateToProps)(Header);
