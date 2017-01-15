import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <span>Day: {this.props.gameReducer.day}</span>
        <span>Cash: {this.props.gameReducer.balance}</span>
        <span>Capacity: {this.props.gameReducer.capacity}</span>
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
