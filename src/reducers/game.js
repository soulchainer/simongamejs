import {
  CHANGE_GAME_MODE,
  CHANGE_GAME_SPEED,
  END_GAME,
  END_SEQUENCE,
  MUSIC_BUTTON_ERROR,
  START_GAME,
  START_SEQUENCE,
  TOGGLE_SOUND,
  TOGGLE_STRICT_MODE,
  UPDATE_GAME_SCORE,
} from '../actions/index';

const initialState = {
  highScore: 0, // best score ever
  currentScore: 0, // score from the actual game
  gameOver: false, // the game has ended
  mode: 'classic', // game mode (classic/rewind/surprise/swipe/listen!)
  // CPU playing null→none, 'sequence', 'error'→ player error, 'win'→ player won
  playing: null,
  sound: true, // play sounds or not
  speed: 1, // game speed (changes pauses and sequence steps durations)
  strict: false, // repeat the last combination on error or reset the game
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case CHANGE_GAME_MODE:
      return { ...state, mode: action.payload };
    case CHANGE_GAME_SPEED:
      return { ...state, speed: action.payload };
    case END_GAME:
      return { ...state, currentScore: 0, gameOver: true };
    case END_SEQUENCE:
      return { ...state, playing: null };
    case MUSIC_BUTTON_ERROR:
      return { ...state, playing: 'error' };
    case START_GAME:
      return { ...state, currentScore: 0, gameOver: false };
    case START_SEQUENCE:
      return { ...state, playing: 'sequence' };
    case TOGGLE_SOUND:
      return { ...state, sound: !state.sound };
    case TOGGLE_STRICT_MODE:
      return { ...state, strict: !state.strict };
    case UPDATE_GAME_SCORE:
      return { ...state, currentScore: state.currentScore + 1 };
    default:
      return state;
  }
}
