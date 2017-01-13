import { BUY_DRUGS } from './const';

function action(inventory, total) {
  return {
    type: BUY_DRUGS,
    inventory,
    total,
  };
}

module.exports = action;
