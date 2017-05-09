import {
  CHANGE_GAME_MODE,
  CHANGE_GAME_SPEED,
  END_GAME,
  END_SEQUENCE,
  MUSIC_BUTTON_ERROR,
  RESET_GAME,
  START_GAME,
  START_SEQUENCE,
  TOGGLE_SOUND,
  TOGGLE_STRICT_MODE,
  UPDATE_GAME_SCORE,
  UPDATE_GAME_HIGH_SCORES,
} from '../actions/index';
import { gameModes } from '../constants';

const modes = Object.keys(gameModes);
const highScores = {};
modes.forEach((key) => { highScores[key] = 0; });

const initialState = {
  highScores, // best scores ever
  currentScore: 0, // actual score from the game
  lastEndScore: 0, // total score from the last game won/lost
  gameOver: false, // the user left/lost the game
  gameWon: false, // the user won the game
  mode: modes[0], // game mode (classic/rewind/surprise/swipe/listen)
  // CPU playing null→none, 'sequence', 'error'→ player error, 'win'→ player won
  playing: null,
  sound: true, // play sounds or not
  speed: '1', // game speed (changes pauses and sequence steps durations)
  strict: false, // repeat the last combination on error or reset the game
};

export default function game(state = initialState, action) {
  const baseState = { ...initialState, ...state };
  switch (action.type) {
    case CHANGE_GAME_MODE:
      return { ...baseState, mode: action.payload };
    case CHANGE_GAME_SPEED:
      return { ...baseState, speed: action.payload };
    case END_GAME:
      return {
        ...baseState,
        gameOver: action.payload === 'gameover',
        gameWon: action.payload === 'gamewon',
        lastEndScore: baseState.currentScore,
      };
    case END_SEQUENCE:
      return { ...baseState, playing: null };
    case MUSIC_BUTTON_ERROR:
      return { ...baseState, playing: 'error' };
    case RESET_GAME:
      return {
        ...baseState,
        currentScore: 0,
        gameOver: false,
        gameWon: false,
      };
    case START_GAME:
      return { ...baseState, currentScore: 0, lastEndScore: 0 };
    case START_SEQUENCE:
      return { ...baseState, playing: 'sequence' };
    case TOGGLE_SOUND:
      return { ...baseState, sound: !baseState.sound };
    case TOGGLE_STRICT_MODE:
      return { ...baseState, strict: !baseState.strict };
    case UPDATE_GAME_SCORE:
      return { ...baseState, currentScore: baseState.currentScore + 1 };
    case UPDATE_GAME_HIGH_SCORES:
      return {
        ...baseState,
        highScores: {
          ...baseState.highScores,
          [baseState.mode]: baseState.lastEndScore,
        },
      };
    default:
      return baseState;
  }
}
