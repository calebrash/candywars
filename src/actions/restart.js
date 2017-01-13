import { RESTART } from './const';

function action(parameter) {
  return { type: RESTART, parameter };
}

module.exports = action;
