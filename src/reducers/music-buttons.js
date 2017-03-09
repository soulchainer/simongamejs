import { MUSIC_BUTTON_ON, MUSIC_BUTTON_OFF } from '../actions/index';

const initialState = {
  green: {
    id: "green",
    active: false,
  },
  yellow: {
    id: "yellow",
    active: false,
  },
  blue: {
    id: "blue",
    active: false,
  },
  red: {
    id: "red",
    active: false,
  },
};

export default function musicButtons(state = initialState, action) {
  switch (action.type) {
    case MUSIC_BUTTON_ON:
      return { ...state, [action.id]: { id: action.id, active: true } };
    case MUSIC_BUTTON_OFF:
      return { ...state, [action.id]: { id: action.id, active: false } };
    default:
      return state;
  }
};
