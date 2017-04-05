import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GameScreen from '../screens/GameScreen';
import GameOverScreen from '../screens/GameOverScreen';
import GlobalCSS from '../components/GlobalCSS';
import StartScreen from '../screens/StartScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <div className="Root">
          <Route exact path="/" render={StartScreen} />
          <Route exact path="/game" render={GameScreen} />
          <Route path="/gameover" render={GameOverScreen} />
          <Route path="/settings" render={SettingsScreen} />
        </div>
        <style jsx global>{`${GlobalCSS}`}</style>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;
