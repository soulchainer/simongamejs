/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import Root from './containers/Root';
import rootReducer from './reducers/index';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  rootReducer, /* preloadedState, */
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

const load = () => render((
  <AppContainer>
    <Root store={store} />
  </AppContainer>
), document.querySelector('#root'));

if (module.hot) {
  module.hot.accept('./containers/Root', load);
}

load();
