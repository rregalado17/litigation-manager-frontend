import React from 'react';
import { connect } from 'react-redux'
import {fetchLawyers} from './actions/fetchLawyers'
import LawyersContainer from './containers/LawyersContainer'


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
       <LawyersContainer />
      </div>
    );
  }

}

export default connect()(App);
