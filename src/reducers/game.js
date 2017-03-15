import {
  END_SEQUENCE,
  SET_GAME_MODE,
  START_GAME,
  START_SEQUENCE,
  TOGGLE_SOUND,
  TOGGLE_STRICT_MODE,
  UPDATE_GAME_SPEED,
} from '../actions/index';

const initialState = {
  highScore: 0, // best score ever
  currentScore: 0, // score from the actual game
  gameOver: false, // the game has ended
  mode: 'classic', // game mode (classic/no limit/rewind/surprise/swipe/listen!)
  playingSequence: false, // CPU playing a sequence (next turn/player win/player error)
  sound: true, // play sounds or not
  speed: 1, // game speed (changes pauses and sequence steps durations)
  strict: false, // repeat the last combination on error or reset the game
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case END_SEQUENCE:
      return { ...state, playingSequence: false };
    case SET_GAME_MODE:
      return { ...state, mode: action.mode };
    case START_GAME:
      return { ...state, currentScore: 0, gameOver: false };
    case START_SEQUENCE:
      return { ...state, playingSequence: true };
    case TOGGLE_SOUND:
      return { ...state, sound: !state.sound };
    case TOGGLE_STRICT_MODE:
      return { ...state, strict: !state.strict };
    case UPDATE_GAME_SPEED:
      return { ...state, speed: action.speed };
    default:
      return state;
  }
}
