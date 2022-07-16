import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './App.scss';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
