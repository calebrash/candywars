import { START_GAME } from './const';

function action(parameter) {
  return {
    type: START_GAME,
    parameter
  };
}

module.exports = action;
