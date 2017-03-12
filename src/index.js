/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import reducer from './reducers/index';
import App from './components/App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

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
