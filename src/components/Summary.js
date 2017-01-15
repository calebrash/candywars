import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MAX_DAYS, START_BALANCE } from '../reducers/const';
import { startGame } from '../actions';

class Summary extends React.Component {

  render() {
    const endingBalance = this.props.gameReducer.balance - START_BALANCE;
    return (
      <div className="summary">
        <h1>Game over</h1>
        <h2>You {endingBalance >= 0 ? 'made' : 'lost'} ${Math.abs(endingBalance)} in {MAX_DAYS} days</h2>
        <button className="btn" onClick={this.props.actions.startGame}>Start over</button>
      </div>
    );
  }
}

Summary.displayName = 'Summary';
Summary.propTypes = {};
Summary.defaultProps = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
