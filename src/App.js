import React, { Component } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { auth } from './firebase/firebase.utils';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';

class App extends Component {

  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }

  //Evita leaks en la memoria
  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
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
