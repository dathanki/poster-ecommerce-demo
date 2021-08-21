import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

import Logo from './../../assets/logo.png';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
});


const Header = props => {
    const dispatch = useDispatch();
    const { currentUser, totalNumCartItems } = useSelector(mapState);


    const signOut = () => {
        dispatch(signOutUserStart());
    };


    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Aesthetic Art LOGO" />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Search">
                                Search
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/Cart">
                            Your Cart ({totalNumCartItems})
                            </Link>
                        </li>

                        {currentUser && [
                            <li>
                                <Link to="/Dashboard">
                                    My Account
                                </Link>
                            </li>,
                            <li>
                                <span onClick={() => signOut()}>
                                    LOGOUT
                                </span>
                            </li>
                        ]}

                        {!currentUser && (
                            <li>
                                <Link to="/Registration">
                                    Register
                                </Link>
                            </li>,
                            <li>
                                <Link to="/Login">
                                    Login
                                </Link>
                            </li>
                        )}

                    </ul>




                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
};



export default Header;