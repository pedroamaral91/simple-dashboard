import { AuthTypes } from '../auth/types';

export type UserState = {
  readonly id: number
  readonly name: string
}

type SignInSuccesAction = {
  type: AuthTypes.SIGN_IN_SUCCESS;
  payload: {
    user: {
      id: number
      name: string
    }
  }
}

type SignOutAction = {
  type: AuthTypes.CLEAR
}

export type UserActions = SignInSuccesAction | SignOutAction
