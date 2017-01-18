import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import { switchView } from '../actions';
import { VIEWS } from '../reducers/const';

class Incident extends React.Component {
  render() {
    return (
      <div className="incident">
        <h2>{this.props.gameReducer.incident.title}</h2>
        <h3>{this.props.gameReducer.incident.subtitle}</h3>
        <Header />
        <button className="btn" onClick={() => this.props.actions.switchView(VIEWS.DRUGS)}>Continue</button>
      </div>
    );
  }
}

Incident.displayName = 'Incident';
Incident.propTypes = {
  actions: PropTypes.shape({
    switchView: PropTypes.func.isRequired,
  }),
  gameReducer: PropTypes.shape({
    incident: PropTypes.object,
  }),
};

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
