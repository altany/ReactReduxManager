import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' }; // Ensure state is never undefined

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }; // Make NEW object from state,
    default:
      return state;
  }
};
