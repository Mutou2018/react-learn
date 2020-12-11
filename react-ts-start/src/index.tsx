import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import {StoreState} from './store/types'

import reducer from './store/reducer';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);