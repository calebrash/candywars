import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startGame } from '../actions/';
import { MAX_DAYS, START_BALANCE, START_CAPACITY } from '../reducers/const';

class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <h1>Welcome to Candywars!</h1>
        <h3>You need to make as much money as possible.</h3>
        <p>You have {MAX_DAYS} days, ${START_BALANCE}, and {START_CAPACITY} spaces in your coat</p>
        <button className="btn" onClick={this.props.actions.startGame}>
          Get started
        </button>
      </div>
    );
  }
}

Intro.displayName = 'Intro';
Intro.propTypes = {
  actions: PropTypes.shape({
    startGame: PropTypes.func.isRequired,
  }),
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      startGame,
    }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Intro);
