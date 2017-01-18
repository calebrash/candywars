/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  startGame,
  pickLocation,
  buyDrugs,
  switchView
} from '../actions/';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, gameReducer} = this.props;
    return <Main actions={actions} gameReducer={gameReducer}/>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({
    startGame: PropTypes.func.isRequired,
    pickLocation: PropTypes.func.isRequired,
    buyDrugs: PropTypes.func.isRequired,
    switchView: PropTypes.func.isRequired,
  }),
  gameReducer: PropTypes.shape({
    view: PropTypes.number,
    day: PropTypes.number,
    balance: PropTypes.number,
    inventory: PropTypes.object,
    capacity: PropTypes.number,
    locations: PropTypes.array,
    drugs: PropTypes.object,
    incident: PropTypes.object,
  }),
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = { gameReducer: state.gameReducer };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    startGame,
    pickLocation,
    buyDrugs,
    switchView
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
