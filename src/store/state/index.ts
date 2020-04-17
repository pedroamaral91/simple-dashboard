import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

import core from './core';
import { authReducer, authSagas } from './auth';
import { modalReducer } from './modal';
import { default as cspfReducer, cspfSagas } from './cspf';

export const reducers = combineReducers({
  core,
  authReducer,
  modalReducer,
  cspfReducer,
});

export function* rootSagas() {
  yield all([...authSagas, ...cspfSagas]);
}

// Creators
export { authCreators } from './auth';
export { modalCreators } from './modal';
export { cspfCreators } from './cspf';

// Selectors
export { authSelectors } from './auth';
export { modalSelectors } from './modal';
export { cspfSelectors } from './cspf';

export type ApplicationState = ReturnType<typeof reducers>;
