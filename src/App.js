import React, { Component } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {

  unsuscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
