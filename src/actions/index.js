/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import switchView from '../actions/switchView.js';
import buyDrugs from '../actions/buyDrugs.js';
import pickLocation from '../actions/pickLocation.js';
import nextDay from '../actions/nextDay.js';
import startGame from '../actions/startGame.js';
const actions = {
  startGame,
  nextDay,
  pickLocation,
  buyDrugs,
  switchView
};
module.exports = actions;
