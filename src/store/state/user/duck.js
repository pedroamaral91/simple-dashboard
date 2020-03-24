import { createReducer } from 'reduxsauce';
import { authTypes } from '../auth';
import { defaultState } from './model';

const signInSuccess = (state, { user }) => ({
  ...state,
  id: user.id,
  name: user.nome,
});

const signOut = () => ({ ...defaultState });

export default createReducer(defaultState, {
  [authTypes.SIGN_IN_SUCCESS]: signInSuccess,
  [authTypes.SIGN_OUT]: signOut,
});
