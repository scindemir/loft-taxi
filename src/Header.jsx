import React, { Component } from 'react';
import { withAuth } from './AuthContext';



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
              <button className="header__right-link" onClick={() => {this.props.navigate("map")}}>
                Map
              </button>
            </li>
            <li className="header__right-item">
              <button className="header__right-link" onClick={() => {this.props.navigate("profile")}}>
                Profile
              </button>
            </li>
            <li className="header__right-item">
              <button className="header__right-link" onClick={this.props.unauthenticate}>
                Log Out
              </button>
            </li>
          </ul>
        </nav>
    </div>
    </>
    }
}

export const HeaderWithAuth = withAuth(Header);