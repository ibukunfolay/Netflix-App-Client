import React, { useEffect, useState } from 'react';
import './login.scss';
import logo from '../../assets/Netflix-Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../redux/actions/userActions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = useSelector((state) => state.userSignin);
  const { user, error, loading } = signIn;

  const handleFinish = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
    // console.log(email, password);
  };

  return (
    <div className="login">
      <div className="login__top">
        <div className="login__top-wrapper">
          <img src={logo} alt="" className="logo" />
        </div>
      </div>
      <div className="login__container">
        <form method="post" onSubmit={handleFinish}>
          <h1>Sign up</h1>
          <input
            type="email"
            name="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="loginButton">
            Sign In
          </button>
          <span>
            New to Netflix?{' '}
            <Link to="/register">
              <b>Sign up now.</b>
            </Link>
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
