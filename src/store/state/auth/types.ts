export enum AuthTypes {
  CLEAR = '@auth/AUTH_CLEAR',
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE',
}

export type AuthState = {
  readonly token: string;
  readonly signed: boolean;
  readonly loading: boolean;
};

// Action Types
export interface AuthClearAction {
  type: typeof AuthTypes.CLEAR;
}

export interface AuthSignInRequestAction {
  type: typeof AuthTypes.SIGN_IN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

interface AuthSignInSuccessAction {
  type: typeof AuthTypes.SIGN_IN_SUCCESS;
  payload: {
    token: string;
  };
}
interface AuthSignInFailureAction {
  type: typeof AuthTypes.SIGN_IN_FAILURE;
}

export type AuthActions =
  | AuthClearAction
  | AuthSignInRequestAction
  | AuthSignInSuccessAction
  | AuthSignInFailureAction;
