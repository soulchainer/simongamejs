import { combineReducers } from 'redux';

import game from './game';
import simonButtons from './simon-buttons';
import moves from './moves';

export default combineReducers({
  game,
  simonButtons,
  moves,
});
