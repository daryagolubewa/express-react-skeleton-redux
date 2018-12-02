import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './redux/reducers';
import Routes from './routes/routes';

const history = createBrowserHistory();
const composeEnhancers = composeWithDevTools({});
const initialState = {
  app: {
    name: 'Express React Skeleton',
    say: 'nothing for now'
  }
};

const store = createStore(reducers, initialState, composeEnhancers());

const Index = () => (
  <Provider store={ store }>
    <Router history={ history }>
      <Routes />
    </Router>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('react-app'));
