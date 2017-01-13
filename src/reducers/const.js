const MAX_DAYS = 5;
const START_BALANCE = 1000;

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

const INCIDENTS = {
};

export {
    MAX_DAYS,
    START_BALANCE,
    VIEWS,
    LOCATIONS,
    DRUGS,
}
