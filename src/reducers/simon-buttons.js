import { buttonIds } from '../constants';
import {
  CHANGE_BUTTON_COLORS,
  CPU_MUSIC_BUTTON_ON,
  CPU_MUSIC_BUTTON_OFF,
  END_GAME,
  MUSIC_BUTTON_ON,
  MUSIC_BUTTON_OFF } from '../actions/index';

const initialState = {
  buttons: [
    {
      id: 'green',
      active: false,
      cpuActive: false,
      position: 'top-left',
    },
    {
      id: 'red',
      active: false,
      cpuActive: false,
      position: 'top-right',
    },
    {
      id: 'yellow',
      active: false,
      cpuActive: false,
      position: 'bottom-left',
    },
    {
      id: 'blue',
      active: false,
      cpuActive: false,
      position: 'bottom-right',
    },
  ],
  buttonColors: buttonIds,
};

export default function simonButtons(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_BUTTON_COLORS:
      return { ...state, buttonColors: payload };
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
    case END_GAME:
      return initialState;
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
