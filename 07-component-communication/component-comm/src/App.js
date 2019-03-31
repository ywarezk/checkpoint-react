import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './components/Child';
import HelloWorldContext from './contexts/hello-world-context';
import Child2 from './components/Child2';

class App extends Component {
  state = {
    message: 'hello world'
  }

  changeMessage = (message) => {
    this.setState({
      message
    })
  }

  render() {
    const temp = HelloWorldContext;
    return (
      <div className="App">
        <HelloWorldContext.Provider value={ {message: this.state.message, changeMessage: this.changeMessage} }>
          <Child></Child>
          <Child2></Child2>
        </HelloWorldContext.Provider>
      </div>
    );
  }
}

export default App;
