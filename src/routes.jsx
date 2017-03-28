import React from 'react';
import { Route } from 'react-router-dom';

import GameScreen from './screens/GameScreen';
import GlobalCSS from './components/GlobalCSS';
import StartScreen from './screens/StartScreen';
import SettingsScreen from './screens/SettingsScreen';

export default (
  <div>
    <Route exact path="/" component={StartScreen} />
    <Route path="/" render={GlobalCSS} />
    <Route path="/game" component={GameScreen} />
    <Route path="/settings" component={SettingsScreen} />
  </div>
);
