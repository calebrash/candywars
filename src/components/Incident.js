import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import { switchView } from '../actions';
import { VIEWS } from '../reducers/const';

class Incident extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.gameReducer.incident.title}</h2>
        <Header />
        <button onClick={() => this.props.actions.switchView(VIEWS.DRUGS)}>Continue</button>
      </div>
    );
  }
}

Incident.displayName = 'Incident';
Incident.propTypes = {};
Incident.defaultProps = {};

function mapStateToProps(state) {
  return {
    gameReducer: state.gameReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      switchView
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Incident);
