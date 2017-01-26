const MAX_DAYS = 30;
const START_BALANCE = 1000;
const START_CAPACITY = 100;
const INCIDENT_FREQUENCY = 0.1;

const VIEWS = {
  INTRO: 1,
  LOCATIONS: 2,
  CANDY: 3,
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

const CANDY = {
  Licorice: {
    index: 1,
  },
  Gumdrops: {
    index: 10,
  },
  Peppermints: {
    index: 20,
  },
  'Jelly Beans': {
    index: 40,
  },
  Taffy: {
    index: 70,
  },
  'Chocolate Coins': {
    index: 100,
  },
};

const INCIDENTS = [
  {
    title: 'You ate too much candy and now you feel sick.',
    subtitle: 'Spend $200 at the doctor\'s office.',
    state: {
      balance: -200,
    }
  },
  {
    title: 'You found a old coat in an alley.',
    subtitle: 'Now you can carry more candy!',
    state: {
      capacity: 200,
    }
  },
  {
    title: 'You found some money in a totally normal and legal way.',
    subtitle: 'Yay, $200!',
    state: {
      balance: 200,
    }
  },
];

export {
    MAX_DAYS,
    START_BALANCE,
    START_CAPACITY,
    VIEWS,
    LOCATIONS,
    CANDY,
    INCIDENTS,
    INCIDENT_FREQUENCY,
};
