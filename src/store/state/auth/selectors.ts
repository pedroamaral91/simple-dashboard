import { createSelector } from 'reselect';
import { ApplicationState } from '..';

const getState = (globalState: ApplicationState) => globalState.authReducer;

const getIsLoading = createSelector([getState], state => state.loading);

const getIsSigned = createSelector([getState], state => state.signed);

export default Object.freeze({
  getIsLoading,
  getIsSigned,
});
