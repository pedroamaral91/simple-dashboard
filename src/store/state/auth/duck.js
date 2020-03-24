import { createActions, createReducer } from 'reduxsauce';
import { defaultState } from './model';

export const { Types, Creators } = createActions({
  signInRequest: ['email', 'senha'],
  signInSuccess: ['token', 'user'],
  signFailure: [],
  signOut: [],
});

const signInRequest = state => ({
  ...state,
  loading: true,
});

const signInSuccess = (state, { token }) => ({
  ...state,
  token,
  loading: false,
  signed: true,
});

const signOut = state => ({
  ...state,
  token: null,
  signed: false,
});

const signFailure = state => ({
  ...state,
  loading: false,
});

export default createReducer(defaultState, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_OUT]: signOut,
  [Types.SIGN_FAILURE]: signFailure,
});
