import { combineReducers } from 'redux';

import game from './game';
import musicButtons from './music-buttons';
import tones from './tones';

export default combineReducers({
  game,
  musicButtons,
  tones
});