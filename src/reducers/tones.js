import {
  NEW_TONE,
  SET_MAX_TONES,
  UPDATE_PLAYER_TONES,
} from '../actions/index';

const initialState = {
  player: [],
  currentGame: [],
  max: 20, // A number or Infinity for «No limit» «mode»
};

export default function tones(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PLAYER_TONES:
      return { ...state, player: [...state.player, action.payload] };
    case NEW_TONE:
      return { ...state, currentGame: [...state.currentGame, action.payload] };
    case SET_MAX_TONES:
      return { ...state, max: action.payload };
    default:
      return state;
  }
}
