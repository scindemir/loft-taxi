import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate } from './actions';
import {HeaderWithAuth} from './Header';
import { Link } from 'react-router-dom';

export class Home extends Component {
  goToProfile = () => {
    this.props.navigate('profile');
  }

  goToRegister = () => {
    this.props.navigate('register');
  }

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  }

  

  render() {
    return (
      <>
    {
      this.props.isLoggedIn ? (
        <>
        <header>
          <HeaderWithAuth />
        </header>
        <p>
          You are logged in <button onClick={this.goToProfile}>go to profile</button>
        </p>
        </>
      ) : (
        <div>
          <div className="entrance">
            <div className="entrance__left">
              <img src="./pic/logoBig.png" alt="" className="entrance__left-logo" />
            </div>
          </div>
          <div className="loginform">
            <div className="map">
              <img alt="map" src="./pic/map.png" className="mapPic" />
            </div>
            <div className="loginform__title">Log in</div>
            <form className="loginform__form" onSubmit={this.authenticate}>
              <label htmlFor="email" className="form-email-label">Email:</label>
              <input id="email" type="email" name="email" size="28" className="form-email-input" placeholder="mail@mail.ru" />
              <label htmlFor="password" className="form-pwd-label">Password:</label>
              <input id="password" type="password" name="password" size="28" className="form-pwd-input" placeholder="******" />
              <button className="loginform__forgot">Forgot the password?</button>
              <button type ="submit" id="submit" className="loginform__button">Enter</button>
            </form>
            <div className="loginform__register">
              New user? <Link to='/register' className="loginform__register-link">Register</Link>
            </div>
          </div>
        </div>
      )
    }

      </>
    );
  }
}

export const HomeWithAuth = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Home);