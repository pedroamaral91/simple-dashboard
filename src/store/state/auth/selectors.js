import { createSelector } from 'reselect';

const getState = globalState => globalState.authReducer;

const getIsLoading = createSelector([getState], state => state.loading);

const getIsSigned = createSelector([getState], state => state.signed);

export default Object.freeze({
  getIsLoading,
  getIsSigned,
});
