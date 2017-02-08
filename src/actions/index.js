import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  USER_FAIL
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => authStatus({ dispatch, user, type: LOGIN_USER_SUCCESS }))
    .catch((err) => {
      console.log(err);
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => authStatus({ dispatch, user, type: REGISTER_USER_SUCCESS }))
        .catch((error) => authStatus({ dispatch, type: USER_FAIL, error }));
    });
  };
};

const authStatus = ({ dispatch, user, type, error }) => {
  const action = { type };
  if (user) action.payload = user;
  if (error) action.payload = error.message ? error.message : 'Authentication error';
  dispatch(action);
};
