import { action as Action } from 'typesafe-actions';
import { Reducer } from 'redux';
import { UserState } from '../user/types';
import { AuthTypes, AuthState, AuthActions } from './types';

const INITIAL_STATE: AuthState = {
  loading: false,
  token: '',
  signed: false,
};

export const authCreators = {
  authClear: () => Action(AuthTypes.CLEAR),
  signInRequest: (email: string, password: string) =>
    Action(AuthTypes.SIGN_IN_REQUEST, { email, password }),
  signInSuccess: (token: string, user: UserState) =>
    Action(AuthTypes.SIGN_IN_SUCCESS, { token, user }),
  signInFailure: (): AuthActions => Action(AuthTypes.SIGN_IN_FAILURE),
};

const authReducer: Reducer<AuthState, AuthActions> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case AuthTypes.CLEAR:
      return INITIAL_STATE;
    case AuthTypes.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        signed: true,
        token: action.payload.token,
      };
    case AuthTypes.SIGN_IN_FAILURE:
      return { ...state, signed: false, loading: false };
    default:
      return state;
  }
};

export default authReducer;
