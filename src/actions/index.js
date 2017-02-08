import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL
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
    .then(user => authStatus({ dispatch, user, type: USER_AUTH_SUCCESS }))
    .catch((err) => {
      console.log(err);
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => authStatus({ dispatch, user, type: USER_AUTH_SUCCESS }))
        .catch((error) => authStatus({ dispatch, type: USER_AUTH_FAIL, error }));
    });
  };
};

const authStatus = ({ dispatch, user, type, error }) => {
  const action = { type };
  if (user) action.payload = user;
  if (error) action.payload = error.message ? error.message : 'Authentication error';
  dispatch(action);
};
