/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import restart from '../actions/restart.js';
import buyDrugs from '../actions/buyDrugs.js';
import pickLocation from '../actions/pickLocation.js';
import nextDay from '../actions/nextDay.js';
import startGame from '../actions/startGame.js';
const actions = {
  startGame,
  nextDay,
  pickLocation,
  buyDrugs,
  restart
};
module.exports = actions;
