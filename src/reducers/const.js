const MAX_DAYS = 5;
const START_BALANCE = 1000;
const INCIDENT_FREQUENCY = 0.1;

const VIEWS = {
    INTRO: 1,
    LOCATIONS: 2,
    DRUGS: 3,
    INCIDENT: 4,
    SUMMARY: 5,
};

const LOCATIONS = [
  'Manhattan',
  'Brooklyn',
  'Bronx',
  'Staten Island',
  'Queens',
];

const DRUGS = {
  'Weed':    { index: 1 },
  'Speed':   { index: 10 },
  'Acid':    { index: 20 },
  'Heroin':  { index: 40 },
  'Ludes':   { index: 70 },
  'Cocaine': { index: 100 },
};

const INCIDENTS = [
  {
    title: 'Officer Hardass caught you buying drugs. You gave him $200 for a bribe.',
    state: {
      balance: -200
    }
  },
  {
    title: 'You found a old trenchcoat in an alley. Now you can carry more drugs.',
    state: {
      capacity: 200
    }
  },
  {
    title: 'You got in a fight with a crackhead and won. +$200!',
    state: {
      capacity: 200
    }
  },
];

export {
    MAX_DAYS,
    START_BALANCE,
    VIEWS,
    LOCATIONS,
    DRUGS,
    INCIDENTS,
    INCIDENT_FREQUENCY,
}
