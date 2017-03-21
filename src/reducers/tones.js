import {
  END_GAME,
  END_SEQUENCE,
  MUSIC_BUTTON_ERROR,
  NEW_TONE,
  SET_MAX_TONES,
  START_SEQUENCE,
  UPDATE_PLAYER_TONES,
} from '../actions/index';

const initialState = {
  player: [],
  currentGame: [],
  max: 20, // A number or Infinity for «No limit» «mode»
};

export default function tones(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case END_SEQUENCE:
    case MUSIC_BUTTON_ERROR:
      return { ...state, player: [] };
    case END_GAME:
      return { ...state, currentGame: [] };
    case NEW_TONE:
      return { ...state, currentGame: [...state.currentGame, payload] };
    case SET_MAX_TONES:
      return { ...state, max: payload };
    case START_SEQUENCE:
      return { ...state, player: [] };
    case UPDATE_PLAYER_TONES:
      return { ...state, player: [...state.player, payload] };
    default:
      return state;
  }
}
