import { action as Action, createReducer } from 'typesafe-actions';

import { CspfFormTypes, CspfFormActions } from './types';
import { ICspf } from '../../core/cspf/models/cspf';
import { ICspfFormInitialState, INITIAL_STATE } from './model';

export const cspfFormCreators = {
  clear: (): CspfFormActions => Action(CspfFormTypes.CLEAR),
  setPessoaFisicaID: (pessoaFisicaID: string): CspfFormActions =>
    Action(CspfFormTypes.SET_CSPF_ID, { pessoaFisicaID }),
  saveCspfAsync: (data: Partial<ICspf>): CspfFormActions =>
    Action(CspfFormTypes.SAVE_CSPF_ASYNC, { data }),
  saveSuccess: (): CspfFormActions => Action(CspfFormTypes.SAVE_SUCCESS),
  saveFailure: (): CspfFormActions => Action(CspfFormTypes.SAVE_FAILURE),
};

const cspfReducer = createReducer<ICspfFormInitialState, CspfFormActions>(
  INITIAL_STATE,
)
  .handleType(CspfFormTypes.CLEAR, () => INITIAL_STATE)
  .handleType(CspfFormTypes.SAVE_CSPF_ASYNC, state => ({
    ...state,
    isLoading: true,
  }))
  .handleType(CspfFormTypes.SAVE_SUCCESS, state => ({
    ...state,
    isLoading: false,
    createFinalizationStatus: 'success',
  }))
  .handleType(CspfFormTypes.SAVE_FAILURE, state => ({
    ...state,
    isLoading: false,
    createFinalizationStatus: 'fail',
  }));

export default cspfReducer;
