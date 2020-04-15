import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

import { authReducer, authSagas } from './auth';
import { modalReducer } from './modal';

export const reducers = combineReducers({
  authReducer,
  modalReducer,
});

export function* rootSagas() {
  yield all([...authSagas]);
}

// Creators
export { authCreators } from './auth';
export { modalCreators } from './modal';

// Selectors
export { authSelectors } from './auth';
export { modalSelectors } from './modal';

export type ApplicationState = ReturnType<typeof reducers>;
