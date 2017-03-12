import { combineReducers } from 'redux';

import game from './game';
import simonButtons from './simon-buttons';
import tones from './tones';

export default combineReducers({
  game,
  simonButtons,
  tones,
});
