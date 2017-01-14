import {
  START_GAME,
  NEXT_DAY,
  PICK_LOCATION,
  BUY_DRUGS,
  SWITCH_VIEW,
} from '../actions/const';
import {
  LOCATIONS,
  DRUGS,
  VIEWS,
  MAX_DAYS,
  START_BALANCE,
  INCIDENTS,
  INCIDENT_FREQUENCY,
} from './const';

const initialState = {
  view: VIEWS.INTRO,
  day: 1,
  balance: START_BALANCE,
  inventory: {},
  capacity: 100,
  locations: LOCATIONS,
  drugs: setDrugPrices(),
  incident: null,
};

function floor(n) {
  return ~~n;
}

function setDrugPrices() {
  let localDrugs = Object.assign({}, DRUGS);
  Object.keys(localDrugs).forEach((drugName) => {
    const price = floor(localDrugs[drugName].index * Math.random() * 10);
    localDrugs[drugName].price = Math.max(localDrugs[drugName].index, price);
  });
  return localDrugs;
}

function getIncident() {
  if (Math.random() <= INCIDENT_FREQUENCY) {
    return INCIDENTS[floor(Math.random() * (INCIDENTS.length))];
  }
}

function applyIncident(state, incident) {
  let updates = {};
  Object.keys(incident.state).forEach((stateName) => {
    updates[stateName] = incident.state[stateName] + state[stateName]
  });
  return updates;
}

function reducer(state=initialState, action) {
  let updates = {};
  switch (action.type) {

    case PICK_LOCATION:
      let incident = getIncident();
      if (incident) {
        updates = Object.assign({}, applyIncident(state, incident), {
          view: VIEWS.INCIDENT,
          incident,
        });
      } else {
        updates = {
          view: VIEWS.DRUGS,
        };
      }
      break;

    case SWITCH_VIEW:
      updates = {
        view: action.view,
      }
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

    case START_GAME:
      updates = Object.assign({}, initialState, {
        view: VIEWS.LOCATIONS,
        drugs: setDrugPrices(),
      });
      break;
  }
  console.log('action', action);
  console.log('updates', updates);
  return Object.assign({}, state, updates);
}

module.exports = reducer;
