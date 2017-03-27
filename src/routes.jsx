import React from 'react';
import { Route } from 'react-router-dom';

import Game from './components/Game';
import GlobalCSS from './components/GlobalCSS';
import StartScreen from './components/StartScreen';

export default (
  <div>
    <Route exact path="/" component={StartScreen} />
    <Route path="/" render={GlobalCSS} />
    <Route path="/game" component={Game} />
  </div>
);
