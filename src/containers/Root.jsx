import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreditsScreen from '../screens/CreditsScreen';
import GameScreen from '../screens/GameScreen';
import GameEndScreen from '../screens/GameEndScreen';
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
          <Route path="/game#gameover" component={GameEndScreen} />
          <Route path="/game#gamewon" component={GameEndScreen} />
          <Route path="/settings" component={SettingsScreen} />
          <Route path="/credits" component={CreditsScreen} />
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
