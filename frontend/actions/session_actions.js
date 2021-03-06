import * as APIUtil from '../util/session_api_util';
import { hashHistory, withRouter } from 'react-router';
import { closeAuthModal } from './modal_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const LOGOUT = 'LOGOUT';

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user1 => dispatch(receiveCurrentUser(user1))).then(() => {
      dispatch(closeAuthModal('login'));
      hashHistory.push("/lists");
    }),
      err => dispatch(receiveErrors(err.responseJSON)));

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user1 => dispatch(receiveCurrentUser(user1))).then(() => {
      dispatch(closeAuthModal('login'));
      hashHistory.push("/lists");
    }),
      err => dispatch(receiveErrors(err.responseJSON)));

export const logout = () => dispatch => (
  APIUtil.logout().then(user => dispatch(receiveLogout()))
);

export const receiveLogout = () => ({
    type: LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
