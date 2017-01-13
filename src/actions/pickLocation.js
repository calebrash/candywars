import { PICK_LOCATION } from './const';

function action(parameter) {
  return { type: PICK_LOCATION, parameter };
}

module.exports = action;
