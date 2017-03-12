import {
  NEW_TONE,
  SET_MAX_TONES,
  UPDATE_PLAYER_TONES,
} from '../actions/index';

const initialState = {
  player: [],
  currentGame: [],
  max: 20,
};

export default function tones(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PLAYER_TONES:
      return { ...state, player: [...state.player, action.tone] };
    case NEW_TONE:
      return { ...state, currentGame: [...state.currentGame, action.tone] };
    case SET_MAX_TONES:
      return { ...state, max: action.max };
    default:
      return state;
  }
}
