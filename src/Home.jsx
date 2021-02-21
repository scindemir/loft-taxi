import React from 'react';


export const Home = (props) => {
  const logIn = (e) => {
    e.preventDefault();
    props.navigateTo('map');
  }
  const register = (e) => {
    e.preventDefault();
    props.navigateTo('register');
  }

  return (
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
        <form action="" className="loginform__form">
          <label htmlFor="email" className="form-email-label">Email:</label>
          <input id="email" type="email" name="email" size="28" className="form-email-input" placeholder="mail@mail.ru" />
          <label htmlFor="password" className="form-pwd-label">Password:</label>
          <input id="password" type="password" name="password" size="28" className="form-pwd-input" placeholder="******" />
          <button className="loginform__forgot">Forgot the password?</button>
          <button id="submit" name="submit" className="loginform__button" onClick={logIn}>Enter</button>
        </form>
        <div className="loginform__register">
          New user? <button className="loginform__register-link" onClick={register}>Register</button>
        </div>
      </div>
    </div>
    
  )
}