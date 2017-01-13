import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <div>
        Day: {this.props.gameReducer.day}
        Cash: {this.props.gameReducer.balance}
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
