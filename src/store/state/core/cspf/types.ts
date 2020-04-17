import { ICspf } from './models/cspf';

export enum CspfCoreTypes {
  CLEAR = '@CSPF_CORE_TYPES/CLEAR',
  UPDATE = '@CSPF_CORE_TYPES/UPDATE',
}

interface ClearAction {
  type: typeof CspfCoreTypes.CLEAR;
}

interface UpdateAction {
  type: typeof CspfCoreTypes.UPDATE;
  payload: {
    data: ICspf[];
  };
}

export type CspfCoreActions = ClearAction | UpdateAction;
