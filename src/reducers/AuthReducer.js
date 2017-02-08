import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_AUTH,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}; // Ensure state is never undefined, optional

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }; // Make NEW object from state
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case USER_AUTH:
      return { ...state, loading: true, error: '' };
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE, // Clear bc these get stored in the reducer
        user: action.payload
      };
    case USER_AUTH_FAIL:
      return { ...state, error: action.payload, password: '', loading: false };
    default:
      return state;
  }
};
