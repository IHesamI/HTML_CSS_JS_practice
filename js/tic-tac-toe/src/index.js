import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import './index.css';

import XOApp from './components/XOApp';


ReactDOM.render(
  <Provider store={store}>
    <XOApp/>
  </Provider>,
  document.getElementById('root')
);
