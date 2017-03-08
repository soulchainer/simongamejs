import { MUSIC_BUTTON_ON, MUSIC_BUTTON_OFF } from '../actions/index';

const initialState = {
  green: {
    id: "green",
    playing: false,
  },
  yellow: {
    id: "yellow",
    playing: false,
  },
  blue: {
    id: "blue",
    playing: false,
  },
  red: {
    id: "red",
    playing: false,
  },
};

export default function musicButtons(state = initialState, action) {
  switch (action.type) {
    case MUSIC_BUTTON_ON:
      return { ...state, [action.id]: { id: action.id, playing: true } };
    case MUSIC_BUTTON_OFF:
      return { ...state, [action.id]: { id: action.id, playing: false } };
    default:
      return state;
  }
};
