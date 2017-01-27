import {
  START_GAME,
  PICK_LOCATION,
  BUY_CANDY,
  SWITCH_VIEW,
} from '../actions/const';
import {
  LOCATIONS,
  CANDY,
  VIEWS,
  MAX_DAYS,
  START_BALANCE,
  START_CAPACITY,
  INCIDENTS,
  INCIDENT_FREQUENCY,
} from './const';

const initialState = {
  view: VIEWS.INTRO,
  day: 1,
  balance: START_BALANCE,
  inventory: {},
  capacity: START_CAPACITY,
  locations: LOCATIONS,
  candy: {},
  incident: null,
};

function setCandyPrices() {
  const localCandy = Object.assign({}, CANDY);
  Object.keys(localCandy).forEach((candyName) => {
    const price = Math.floor(localCandy[candyName].index * Math.random() * 10);
    localCandy[candyName].price = Math.max(localCandy[candyName].index, price);
  });
  return localCandy;
}

function getIncident() {
  if (Math.random() <= INCIDENT_FREQUENCY) {
    return INCIDENTS[Math.floor(Math.random() * (INCIDENTS.length))];
  }
  return null;
}

function applyIncident(state, incident) {
  const updates = {};
  Object.keys(incident.state).forEach((stateName) => {
    updates[stateName] = incident.state[stateName] + state[stateName];
  });
  return updates;
}

function reducer(state = initialState, action) {
  let updates = {};
  switch (action.type) {
    case PICK_LOCATION: {
      const incident = getIncident();
      if (incident) {
        updates = Object.assign({}, applyIncident(state, incident), {
          view: VIEWS.INCIDENT,
          incident,
        });
      } else {
        updates = {
          view: VIEWS.CANDY,
        };
      }
      break;
    }

    case SWITCH_VIEW: {
      updates = {
        view: action.view,
      };
      break;
    }

    case BUY_CANDY: {
      updates = {
        inventory: Object.assign({}, state.inventory, action.inventory),
        balance: state.balance - action.total,
      };
      if (state.day === MAX_DAYS) {
        updates.view = VIEWS.SUMMARY;
      } else {
        updates = Object.assign({}, updates, {
          day: state.day + 1,
          candy: setCandyPrices(),
          view: VIEWS.LOCATIONS,
        });
      }
      break;
    }

    case START_GAME: {
      updates = Object.assign({}, initialState, {
        view: VIEWS.LOCATIONS,
        candy: setCandyPrices(),
      });
      break;
    }

    default: {
      // no change
    }
  }
  return Object.assign({}, state, updates);
}

module.exports = reducer;
