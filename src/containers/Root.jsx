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
          <Route exact path="/" component={StartScreen} />
          <Route exact path="/game" component={GameScreen} />
          <Route path="/gameover" component={GameOverScreen} />
          <Route path="/settings" component={SettingsScreen} />
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
