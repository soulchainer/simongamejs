/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import debounce from 'lodash.debounce';
import Root from './containers/Root';
import rootReducer from './reducers/index';
import { loadState, saveState } from './utils/localStorage';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState, // our preloaded state
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

store.subscribe(debounce(() => {
  const state = store.getState();
  saveState({
    game: {
      highScores: state.game.highScores,
      mode: state.game.mode,
      sound: state.game.sound,
      speed: state.game.speed,
      strict: state.game.strict,
    },
    moves: { maxMoves: state.moves.maxMoves },
  });
}, 1000));

const load = () => render((
  <AppContainer>
    <Root store={store} />
  </AppContainer>
), document.querySelector('#root'));

if (module.hot) {
  module.hot.accept('./containers/Root', load);
}

load();
