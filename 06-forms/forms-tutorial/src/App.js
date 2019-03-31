import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import LoginFormik from './components/LoginFormik/LoginFormik';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <LoginFormik />
      </div>
    );
  }
}

export default App;
