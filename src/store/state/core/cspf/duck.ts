import { action as Action, createReducer } from 'typesafe-actions';
import { is } from 'immutable';

import { CspfCoreActions, CspfCoreTypes } from './types';
import {
  ICspf,
  ICspfCoreInitialState,
  INITIAL_STATE,
  ICspfByCspfID,
} from './models/cspf';
import { normalize } from '../../../class/normalization/index';

export const cspfCreators = {
  clear: (): CspfCoreActions => Action(CspfCoreTypes.CLEAR),
  update: (data: ICspf[]): CspfCoreActions =>
    Action(CspfCoreTypes.UPDATE, { data }),
};

const cspfReducer = createReducer<ICspfCoreInitialState, CspfCoreActions>(
  INITIAL_STATE,
)
  .handleType(CspfCoreTypes.CLEAR, () => INITIAL_STATE)
  .handleType(CspfCoreTypes.UPDATE, (state, action) => {
    const normalized: ICspfByCspfID = normalize(action.payload.data);
    return is(normalized, state.cspf)
      ? { ...state }
      : { ...state, cspf: state.cspf.merge(normalized) };
  });

export default cspfReducer;
