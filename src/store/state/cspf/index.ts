import { combineReducers } from 'redux';

import { formReducer, formCreators, formSelectors, formSagas } from './form';

export const cspfCreators = {
  form: formCreators,
};

export const cspfSelectors = {
  form: formSelectors,
};

export const cspfSagas = [...formSagas];

export default combineReducers({
  form: formReducer,
});
