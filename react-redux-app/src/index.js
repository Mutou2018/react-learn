import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './store'
import './mock'

/*
  react-redux提供的Provider，把store传给了整个App
*/
const Apps = (
    <Provider store={store}>
        <App></App>
    </Provider>
)

ReactDOM.render(Apps, document.getElementById('root'));

