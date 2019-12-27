import React, { Component } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
