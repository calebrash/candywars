import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    let inventoryTotal = Object.keys(this.props.gameReducer.inventory).reduce((total, drug) => {
      return total + this.props.gameReducer.inventory[drug];
    }, 0);
    return (
      <div className="header">
        <span>Day: {this.props.gameReducer.day}</span>
        <span>Cash: {this.props.gameReducer.balance}</span>
        <span>Capacity: {this.props.gameReducer.capacity - inventoryTotal}</span>
      </div>
    );
  }
}

Header.displayName = 'Header';
Header.propTypes = {};
Header.defaultProps = {};

function mapStateToProps(state) {
  return {
    gameReducer: state.gameReducer
  };
}

export default connect(mapStateToProps)(Header);
