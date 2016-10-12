import './src/main.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';

import AppRoutes from './src/routes';

window.React = React;

const reactRoot = window.document.getElementById('react-root');

ReactDOM.render(
  <Router history={browserHistory}>
    {AppRoutes}
  </Router>,
  reactRoot
);
