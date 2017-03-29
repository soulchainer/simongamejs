export const buttonBorder = {
  radius: '100%',
  width: '2vmin',
};

export const buttonIds = [
  'green',
  'red',
  'yellow',
  'blue',
];

export const colors = {
  black: '#393843',
  blue: '#12a0eb',
  green: '#00cb74',
  red: '#fd2e13',
  yellow: '#ece02f',
};

export const tones = {
  blue: 82.407,
  green: 41.203,
  red: 110,
  yellow: 69.296,
};

// Durations in seconds
export const CPU_TONE_DURATION = 1;
export const ERROR_TONE_DURATION = 1;
export const USER_TONE_FADE_DURATION = 0.5;
// Durations in milliseconds
export const NEXT_SEQUENCE_DELAY = 500;
export const NEXT_SEQUENCE_TONE_DELAY = 50;

export const gameModes = [
  'classic',
  'rewind', // user has to repeat sequence backwards
  'surprise', // color of all Simon buttons change every turn, can't trust them!
  'listen', // there is any visual clue: just sound
];
