import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to='/' className="logo-container">
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link to='/shop' className="option" >SHOP</Link>
            <Link to='/contact' className="option" >CONTACT</Link>
            {
                currentUser ?
                    (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                    :
                    (<Link className="option" to='/signIn'>SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null : (<CartDropdown />)
        }
    </div>
)

//createStructuredSelector lo que nos permite hacer es evitarnos poner (state) en cada uno de los selectores que usemos, esto viene realmente util cuando tenemos varios selectores y nos queremos ahorrar el tener que poner state a cada uno.
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);