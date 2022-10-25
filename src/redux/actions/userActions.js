import cookie from 'js-cookie';
import axios from 'axios';
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from '../constants/userConstants';

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const res = await axios.post('api/auth/login', { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: res });
    cookie.set('user', JSON.stringify(res.data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

const signup = (email, password, username) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST, payload: { email, password } });
  try {
    const res = await axios.post('api/auth/register', {
      email,
      password,
      username,
    });
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
  }
};

export { signin, signup };
