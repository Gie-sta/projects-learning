import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import loginReducer from './reducers/index'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  loginReducer,
  composeEnhancers()
);

ReactDOM.render(
  <Provider store={store} >
    <App />,
</Provider>,
  document.querySelector('#root')
);
