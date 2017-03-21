import {
  END_GAME,
  END_SEQUENCE,
  MUSIC_BUTTON_ERROR,
  MUSIC_BUTTON_ON,
  MUSIC_BUTTON_OFF,
  START_SEQUENCE } from '../actions/index';

const initialState = {
  allowUserInteraction: false,
  buttons: [
    {
      id: 'green',
      active: false,
    },
    {
      id: 'red',
      active: false,
    },
    {
      id: 'yellow',
      active: false,
    },
    {
      id: 'blue',
      active: false,
    },
  ],
};

export default function simonButtons(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case END_SEQUENCE:
      return { ...state, allowUserInteraction: true };
    case END_GAME:
    case MUSIC_BUTTON_ERROR:
    case START_SEQUENCE:
      return { ...state, allowUserInteraction: false };
    case MUSIC_BUTTON_ON:
      return {
        ...state,
        buttons: state.buttons.map(btn => ({ ...btn, active: payload === btn.id })),
      };
    case MUSIC_BUTTON_OFF:
      return {
        ...state,
        buttons: state.buttons.map(btn => ({ ...btn, active: false })),
      };
    default:
      return state;
  }
}
