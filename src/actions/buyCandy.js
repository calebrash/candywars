import { BUY_CANDY } from './const';

function action(inventory, total) {
  return {
    type: BUY_CANDY,
    inventory,
    total,
  };
}

module.exports = action;
