import { ApplicationState } from '../../index';
import { createSelector } from '../../../class/memoize/createSelector';

const getState = (state: ApplicationState) => state.cspfReducer.form;

const getSelectedCspfID = createSelector([getState], state => state.cspfID);

const getIsLoading = createSelector([getState], state => state.isLoading);

export default Object.freeze({
  getSelectedCspfID,
  getIsLoading,
});
