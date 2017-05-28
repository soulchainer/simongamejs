import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CreditsScreen from '../screens/CreditsScreen';
import GameScreen from '../screens/GameScreen';
import GameEndScreen from '../screens/GameEndScreen';
import globalCSS from '../styles/global';
import NotFoundScreen from '../screens/NotFoundScreen';
import StartScreen from '../screens/StartScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="Root">
        <Switch>
          <Route exact path="/" component={StartScreen} />
          <Route path="/game#gameover" component={GameEndScreen} />
          <Route path="/game#gamewon" component={GameEndScreen} />
          <Route path="/game" component={GameScreen} />
          <Route path="/settings" component={SettingsScreen} />
          <Route path="/credits" component={CreditsScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
        <style jsx global>{globalCSS}</style>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;
