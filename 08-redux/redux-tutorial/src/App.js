import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import {ReactReduxContext, Provider} from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Child1 />
          <Child2 />
        </Provider>
        
      </div>
    );
  }
}

export default App;
