import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: ''
}; // Ensure state is never undefined

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }; // Make NEW object from state
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case USER_AUTH_SUCCESS:
      return { ...state, user: action.payload, error: '' };
    case USER_AUTH_FAIL:
      return { ...state, error: action.payload, password: '' };
    default:
      return state;
  }
};
