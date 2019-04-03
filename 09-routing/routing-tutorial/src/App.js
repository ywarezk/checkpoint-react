import React, { Component, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Error404 from './components/Error404';
// import Settings from './components/Settings';

class App extends Component {
  
  // async dynamicImportExample() {
  //   // const module = await import('/hello.js')
  // }

  render() {

    

    return (
      <BrowserRouter>

        <nav>
          <ul>
            <li>
              <Link to="/about/foo-bar" >About</Link>
            </li>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/settings" >settings</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/:id" exact component={About} />
            <Route path="/settings" exact component={lazy(() => import('./components/Settings'))} />
            <Route component={Error404} />
          </Switch>
        </Suspense>
        
        

      </BrowserRouter>
      
    );
  }
}

export default App;
