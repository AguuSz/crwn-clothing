import React, { Component } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signIn' component={SignInAndSignUpPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
