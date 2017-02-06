const INITIAL_STATE = { email: '' }; // Ensure state is never undefined

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
