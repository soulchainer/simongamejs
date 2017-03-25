import {
  CPU_MUSIC_BUTTON_ON,
  CPU_MUSIC_BUTTON_OFF,
  MUSIC_BUTTON_ON,
  MUSIC_BUTTON_OFF } from '../actions/index';

const initialState = {
  buttons: [
    {
      id: 'green',
      active: false,
      cpuActive: false,
    },
    {
      id: 'red',
      active: false,
      cpuActive: false,
    },
    {
      id: 'yellow',
      active: false,
      cpuActive: false,
    },
    {
      id: 'blue',
      active: false,
      cpuActive: false,
    },
  ],
};

export default function simonButtons(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CPU_MUSIC_BUTTON_ON:
      return {
        ...state,
        buttons: state.buttons.map(btn => ({ ...btn, cpuActive: payload === btn.id })),
      };
    case CPU_MUSIC_BUTTON_OFF:
      return {
        ...state,
        buttons: state.buttons.map(btn => ({ ...btn, cpuActive: false })),
      };
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
