import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Routes from './routes/routes';

const history = createBrowserHistory();

const Index = () => (
  <Router history={history}>
    <Routes />
  </Router>
);

ReactDOM.render(<Index />, document.getElementById('react-app'));
