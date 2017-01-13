import {
  START_GAME,
  NEXT_DAY,
  PICK_LOCATION,
  BUY_DRUGS,
  RESTART,
} from '../actions/const';
import {
  LOCATIONS,
  DRUGS,
  VIEWS,
  MAX_DAYS,
  START_BALANCE,
} from './const';

const initialState = {
  view: VIEWS.INTRO,
  day: 1,
  balance: START_BALANCE,
  inventory: {},
  capacity: 100,
  locations: LOCATIONS,
  drugs: setDrugPrices(),
  incident: setIncident(),
};

function setDrugPrices() {
  let localDrugs = Object.assign({}, DRUGS);
  Object.keys(localDrugs).forEach((drugName) => {
    const price = ~~(localDrugs[drugName].index * Math.random() * 10);
    localDrugs[drugName].price = Math.max(localDrugs[drugName].index, price);
  });
  return localDrugs;
}

function setIncident() {
  return null;
}

function reducer(state=initialState, action) {
  let updates = {};
  switch (action.type) {
    case START_GAME:
    case NEXT_DAY:
      updates = {
        view: VIEWS.LOCATIONS,
        drugs: setDrugPrices(),
      };
      break;
    case PICK_LOCATION:
      updates = {
        view: VIEWS.DRUGS,
      };
      break;
    case BUY_DRUGS:
      updates = {
        inventory: Object.assign({}, state.inventory, action.inventory),
        balance: state.balance - action.total,
      }
      if (state.day + 1 === MAX_DAYS) {
        updates.view = VIEWS.SUMMARY;
      } else {
        updates = Object.assign({}, updates, {
          day: state.day + 1,
          drugs: setDrugPrices(),
          view: VIEWS.LOCATIONS,
        });
      }
      break;
    case RESTART:
      updates = Object.assign({}, initialState, {
        view: VIEWS.LOCATIONS
      });
      break;
  }
  console.log('updates', updates);
  return Object.assign({}, state, updates);
}

module.exports = reducer;
