import React from 'react';
import ReactDOM from 'react-dom';
// import store from './store/store';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import lawyerReducer from './reducers/lawyerReducer';
import litigationReducer from './reducers/litigationReducer';
import App from './App';
import './App.scss';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(litigationReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
