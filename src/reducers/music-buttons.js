import { MUSIC_BUTTON_ON, MUSIC_BUTTON_OFF } from '../actions/index';

const initialState = [
  {
    id: "green",
    active: false,
  },
  {
    id: "yellow",
    active: false,
  },
  {
    id: "blue",
    active: false,
  },
  {
    id: "red",
    active: false,
  },
];

export default function musicButtons(state = initialState, action) {
  switch (action.type) {
    case MUSIC_BUTTON_ON:
      return state.map(btn => ({ ...btn, active: action.id === btn.id}));
    case MUSIC_BUTTON_OFF:
      return state.map(btn => ({ ...btn, active: false}));
    default:
      return state;
  }
};
