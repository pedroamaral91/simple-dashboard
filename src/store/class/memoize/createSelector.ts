import { is } from 'immutable';
import { createSelectorCreator, defaultMemoize } from 'reselect';

export const createSelector = createSelectorCreator(defaultMemoize, is);
