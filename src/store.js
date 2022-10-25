import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cookie from 'js-cookie';
import {
  userSigninReducer,
  userSignupReducer,
} from './redux/reducers/userReducer';

const userData = cookie.get('user') || null;
const user = JSON.parse(userData);

const initialState = {
  userSignin: { user },
  userSignup: { user },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
