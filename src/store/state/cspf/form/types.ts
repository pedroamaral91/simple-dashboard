import { ICspf } from '../../core/cspf/models/cspf';

export enum CspfFormTypes {
  CLEAR = '@CSPF_FORM_TYPES/CLEAR',
  SET_CSPF_ID = '@CSPF_FORM_TYPES/SET_CSPF_ID',
  SAVE_CSPF_ASYNC = '@CSPF_FORM_TYPES/SAVE_CSPF_ASYNC',
  SAVE_SUCCESS = '@CSPF_FORM_TYPES/SAVE_SUCCESS',
  SAVE_FAILURE = '@CSPF_FORM_TYPES/SAVE_FAILURE',
}

interface ClearAction {
  type: typeof CspfFormTypes.CLEAR;
}

interface SetCspfIDAction {
  type: typeof CspfFormTypes.SET_CSPF_ID;
  payload: {
    pessoaFisicaID: string;
  };
}

export interface SaveCspfAsyncAction {
  type: typeof CspfFormTypes.SAVE_CSPF_ASYNC;
  payload: {
    data: Partial<ICspf>;
  };
}

interface SaveSuccess {
  type: typeof CspfFormTypes.SAVE_SUCCESS;
}

interface SaveFailure {
  type: typeof CspfFormTypes.SAVE_FAILURE;
}

export type CspfFormActions =
  | ClearAction
  | SetCspfIDAction
  | SaveCspfAsyncAction
  | SaveSuccess
  | SaveFailure;
