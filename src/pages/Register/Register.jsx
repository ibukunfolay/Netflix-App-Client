import React, { useRef, useState } from 'react';
import './register.scss';
import logo from '../../assets/Netflix-Logo.svg';

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="register__top">
        <div className="register__top-wrapper">
          <img src={logo} alt="" className="logo" />
          <button className="login-button">Sign In</button>
        </div>
      </div>
      <div className="register__container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your
          subscription{' '}
        </p>
        {!email ? (
          <div className="register__container-input">
            <input
              type="email"
              name="email"
              className="email"
              placeholder="email address"
              ref={emailRef}
            />
            <button className="registerButton" onClick={() => handleStart()}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="register__container-input">
            <input
              type="password"
              name="password"
              className="email"
              placeholder="password"
              ref={passwordRef}
            />
            <button className="registerButton" onClick={() => handleFinish()}>
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
