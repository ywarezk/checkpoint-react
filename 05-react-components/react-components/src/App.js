import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header message="hey what's up" />
        <Login stamNumber={Math.random()} />
      </div>
    );
  }
}

export default App;
