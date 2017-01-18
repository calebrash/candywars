/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import switchView from '../actions/switchView';
import buyDrugs from '../actions/buyDrugs';
import pickLocation from '../actions/pickLocation';
import startGame from '../actions/startGame';

const actions = {
  startGame,
  pickLocation,
  buyDrugs,
  switchView,
};

module.exports = actions;
