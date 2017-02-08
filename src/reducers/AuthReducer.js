import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: ''
}; // Ensure state is never undefined

export default(state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }; // Make NEW object from state,
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }; // Make NEW object from state,
    default:
      return state;
  }
};
