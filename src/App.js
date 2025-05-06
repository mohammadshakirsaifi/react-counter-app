import React, { Component } from 'react';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <ClassCounter />
        <FunctionalCounter />
      </div>
    );
  }
}

export default App;
