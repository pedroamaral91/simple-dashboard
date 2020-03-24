import { takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { Types as AuthTypes, Creators as AuthCreators } from './duck';

import api from '../../../services/api';

function* signIn({ email, senha }) {
  try {
    const response = yield call(api.post, '/user/login', { email, senha });
    const { token, id, nome } = response.data.data;
    yield put(AuthCreators.signInSuccess(token, { id, nome }));
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } catch (er) {
    yield put(AuthCreators.signFailure());
    toast.error(er.response.data.message);
  }
}

function signOut() {
  console.log('logout');
}

function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.authReducer;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default [
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_OUT, signOut),
];
