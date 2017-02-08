import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  USER_FAIL
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
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return { ...state, user: action.payload, error: '' };
    case USER_FAIL:
      return { ...state, error: action.payload, password: '' };
    default:
      return state;
  }
};
