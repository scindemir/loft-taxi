import React from 'react';


export const Register = (props) => {
  const logIn = (e) => {
    e.preventDefault();
    props.navigateTo('home');
  }
  const register = (e) => {
    e.preventDefault();
    props.navigateTo('profile');
  }

  return (
    <div>
      <div className="entrance">
        <div className="entrance__left">
          <img src="./pic/logoBig.png" alt="" className="entrance__left-logo" />
        </div>
      </div>
      <div className="loginform registerform">
        <div className="map">
          <img alt="map" src="./pic/map.png" className="mapPic" />
        </div>
        <div className="loginform__title">Log in</div>
        <form action="" className="loginform__form">
          <label htmlFor="email" className="form-email-label">Email:</label>
          <input id="email" type="email" name="email" size="28" className="form-email-input" placeholder="mail@mail.ru" />

          <label htmlFor="textname" className="form-name-label">What is your name?</label>
          <input id="textname" type="text" name="textname" size="28" className="form-name-input" placeholder="John Smith" />

          <label htmlFor="password" className="form-pwd-label">Password:</label>
          <input id="password" type="password" name="password" size="28" className="form-pwd-input" placeholder="******" />

          <button id="submit" name="submit" className="loginform__button" onClick={register}>Register</button>
        </form>
        <div className="loginform__register">
          Already have an account? <button className="loginform__register-link" onClick={logIn}>Sign in</button>
        </div>
      </div>
    </div>
    
  )
}