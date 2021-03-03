import React, { Component } from 'react';
import {HeaderWithAuth} from './Header';
import { withAuth } from './AuthContext';


export class Profile extends Component {
  unauthenticate = () => {
    this.props.logOut();
    this.props.navigate("home");
  }

  render() {
    return <>
    <header>
      <HeaderWithAuth navigate={this.props.navigate}/>
    </header>
    <p> Your profile. <button onClick={this.unauthenticate}>Log out</button></p>
    </>
  }
}

export const ProfileWithAuth = withAuth(Profile);