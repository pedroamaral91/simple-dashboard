import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

import { authReducer, authSagas } from './auth';

export const reducers = combineReducers({
  authReducer,
});

export function* rootSagas() {
  yield all([...authSagas]);
}

// Creators
export { authCreators } from './auth';

// Selectors
export { authSelectors } from './auth';

export type ApplicationState = ReturnType<typeof reducers>;
