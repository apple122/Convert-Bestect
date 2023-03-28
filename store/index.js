import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
let store;
function initStore(initialState) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
export const initializeStore = (preloadedState) => {
  let initialStore = store ?? initStore(preloadedState);
  if (preloadedState && store) {
    initialStore = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }
  if (typeof window === 'undefined') {
    return initialStore;
  }
  if (!store) store = initialStore;
  return initialStore;
};
export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
