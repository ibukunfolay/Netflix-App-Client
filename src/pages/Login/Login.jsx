import React from 'react';
import './login.scss';
import logo from '../../assets/Netflix-Logo.svg';

const Login = () => {
  return (
    <div className="login">
      <div className="login__top">
        <div className="login__top-wrapper">
          <img src={logo} alt="" className="logo" />
        </div>
      </div>
      <div className="login__container">
        <form action="submit">
          <h1>Sign In</h1>
          <input
            type="email"
            name="email"
            placeholder="Email or phone number"
          />
          <input type="password" name="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
