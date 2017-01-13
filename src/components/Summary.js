import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MAX_DAYS } from '../reducers/const';
import restart from '../actions/restart';

class Summary extends React.Component {

  render() {
    return (
      <div>
        <h2>Summary</h2>
        <h3>You made ${this.props.gameReducer.balance} in {MAX_DAYS}</h3>
        <button onClick={this.props.actions.restart}>
          Start over</button>
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
      restart,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
