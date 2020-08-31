import React from 'react';
import { connect } from 'react-redux'
import LawyersContainer from './containers/LawyersContainer'
import LitigationsContainer from './containers/LitigationsContainer'


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
       <LawyersContainer />
       <LitigationsContainer />
      </div>
    );
  }

}

export default App;
