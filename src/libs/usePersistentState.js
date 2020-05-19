import { useState, useEffect } from "react";

// make a hook that will work excatly like useState
export function usePersistentState(initialState, key = "default_key") {
  const [state, setState] = useState(() => {
    const exisitingState = localStorage.getItem(key);
    return exisitingState ? JSON.parse(exisitingState) : initialState;
  });

  useEffect(() => {
    // when state changes, save state to local storage
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
