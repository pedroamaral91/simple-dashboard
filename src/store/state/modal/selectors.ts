import { createSelector } from 'reselect';
import { ApplicationState } from '..';

const getState = (globalState: ApplicationState) => globalState.modalReducer;

const getPropsByName = createSelector([getState], state => state.propsByName);

const getIsOpened = createSelector(
  [getState],
  state => state.propsByName.size > 0,
);

const getNames = createSelector([getState], state => state.propsByName.keys());

export default Object.freeze({
  getPropsByName,
  getIsOpened,
  getNames,
});
