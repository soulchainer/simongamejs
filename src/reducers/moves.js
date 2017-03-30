import {
  END_GAME,
  END_SEQUENCE,
  MUSIC_BUTTON_ERROR,
  NEW_MOVE,
  START_SEQUENCE,
  TOGGLE_MAX_MOVES,
  UPDATE_PLAYER_MOVES,
} from '../actions/index';
import { MAX_MOVES } from '../constants';

const initialState = {
  player: [],
  currentGame: [],
  maxMoves: MAX_MOVES, // A number or Infinity for «No limit» «mode»
};

export default function moves(state = initialState, action) {
  const { type, payload } = action;
  const { player, currentGame, maxMoves } = state;

  switch (type) {
    case TOGGLE_MAX_MOVES:
      return { ...state, maxMoves: (maxMoves === MAX_MOVES) ? Infinity : MAX_MOVES };
    case END_SEQUENCE:
    case MUSIC_BUTTON_ERROR:
      return { ...state, player: [] };
    case END_GAME:
      return { ...state, currentGame: [] };
    case NEW_MOVE:
      return { ...state, currentGame: [...currentGame, payload] };
    case START_SEQUENCE:
      return { ...state, player: [] };
    case UPDATE_PLAYER_MOVES:
      return { ...state, player: [...player, payload] };
    default:
      return state;
  }
}
