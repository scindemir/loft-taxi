import React, { Component } from 'react';
import {HeaderWithAuth} from './Header';
import { connect } from 'react-redux';
import { logOut } from './actions';


export class Profile extends Component {
  unauthenticate = () => {
    this.props.logOut();
  }

  render() {
    return <>
    <header>
      <HeaderWithAuth />
    </header>
    <p> Your profile. <button onClick={this.unauthenticate}>Log out</button></p>
    </>
  }
}

export const ProfileWithAuth = connect(
  null,
  { logOut }
)(Profile);