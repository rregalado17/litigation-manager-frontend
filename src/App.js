import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.scss';
import './components/styles.scss'
import Home from './components/Home'
import LawyersContainer from './containers/LawyersContainer'
import NavBar from './components/NavBar'


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home}/>
        <LawyersContainer />
      </div>
    );
  }

}

export default App;
