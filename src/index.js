/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { AppContainer } from 'react-hot-loader';
import rootReducer from './reducers/index';
import App from './components/App';

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
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
), document.querySelector('#root'));

if (module.hot) {
  module.hot.accept('./components/App', load);
}

load();
