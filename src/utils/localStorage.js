export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    // If there isn't a state saved, let the reducers initialize the state
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) { // If any error happens, let the reducers initialize the state
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
