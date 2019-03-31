import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-6">
          <TodoForm />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
