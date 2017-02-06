import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' }; // Ensure state is never undefined

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log(EMAIL_CHANGED);
      return state;
    default:
      return state;
  }
};
