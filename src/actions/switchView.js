import { SWITCH_VIEW } from './const';

function action(view) {
  return {
    type: SWITCH_VIEW,
    view
  };
}

module.exports = action;
