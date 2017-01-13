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
  'Speed':   { index: 2 },
  'Acid':    { index: 3 },
  'Heroin':  { index: 6 },
  'Ludes':   { index: 8 },
  'Cocaine': { index: 10 },
};

const MAX_DAYS = 5;

export {
    MAX_DAYS,
    VIEWS,
    LOCATIONS,
    DRUGS,
}
