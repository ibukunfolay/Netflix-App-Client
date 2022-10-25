import React, { useEffect, useRef, useState } from 'react';
import './register.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/Netflix-Logo.svg';
import { signup } from '../../redux/actions/userActions';

const Register = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signUp = useSelector((state) => state.userSignup);
  const { user, error, loading } = signUp;

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    dispatch(signup(email, password, username));
    // console.log({ email: email, username: username, password: password });
  };

  useEffect(() => {
    try {
      if (user) {
        navigate('/login');
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  return (
    <div className="register">
      <div className="register__top">
        <div className="register__top-wrapper">
          <img src={logo} alt="" className="logo" />
          <button className="login-button" onClick={() => navigate('/login')}>
            Sign In
          </button>
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
          <form
            method="post"
            className="register__container-input"
            onSubmit={handleFinish}
          >
            <input
              type="text"
              name="username"
              className="email"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className="email"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              // disabled={loading}
              className="registerButton"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
