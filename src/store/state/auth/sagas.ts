import { takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { authCreators } from './duck';
import { AuthTypes } from './types';

import api from '../../../services/api';
import { AuthSignInRequestAction } from './types';

function* signIn({ payload }: AuthSignInRequestAction): Generator {
  try {
    const { email, password } = payload;
    const response: any = yield call(api.post, '/user/login', { email, password });
    const { token, id, name } = response.data.data;
    yield put(authCreators.signInSuccess(token, { id, name }));
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } catch (er) {
    yield put(authCreators.signInFailure());
    toast.error(er.response.data.message);
  }
}

// function signOut() {
//   console.log('logout');
// }

function setToken({ payload }: any) {
  if (!payload) return;

  const { token } = payload.authReducer;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default [
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  // takeLatest(AuthTypes.SIGN_OUT, signOut),
];
