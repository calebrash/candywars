import { NEXT_DAY } from './const';

function action(parameter) {
  return { type: NEXT_DAY, parameter };
}

module.exports = action;
