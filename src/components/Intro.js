import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startGame } from '../actions/';

class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <h1>Welcome to Dopewars!</h1>
        <button className="btn" onClick={this.props.actions.startGame}>
          Start
        </button>
      </div>
    );
  }
}

Intro.displayName = 'Intro';
Intro.propTypes = {};
Intro.defaultProps = {};

function mapStateToProps(state) {
  return {
    gameReducer: state.gameReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      startGame,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);