import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn, logOut } from './actions';
import { Link } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';


export class Header extends Component {
    render() {
      return <>
      <div className="header">
      <div className="header__left">
          <img src="./pic/logoHeader.png" alt="" className="header__left-logo" />
      </div>
        <nav className="header__right">
          <ul className="header__right-list">
            <li className="header__right-item">
              <Link to='/map' className="header__right-link">
                Map
              </Link>
            </li>
            <li className="header__right-item">
              <Link to='/profile' className="header__right-link">
                Profile
              </Link>
            </li>
            <li className="header__right-item">
              <Link to='/home' className="header__right-link" onClick={ () => {
                this.props.logOut();
                }}>
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
    </div>
    </>
    }
}

export const HeaderWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { logIn, logOut }
)(Header);