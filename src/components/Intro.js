import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cssmodules from 'react-css-modules';
import styles from './intro.cssmodule.scss';
import { startGame } from '../actions/';

@cssmodules(styles)
class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <h1>Welcome to Dopewars!</h1>
        <button onClick={() => this.props.actions.startGame()}>
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
