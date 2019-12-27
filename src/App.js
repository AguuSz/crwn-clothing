import React, { Component } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage';

const HatsPage = () => (
  <h1>Hats page</h1>
)

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/hats' component={HatsPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
