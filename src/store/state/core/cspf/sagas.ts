import { call, put } from 'redux-saga/effects';

import api from '../../../../services/api';

import { cspfCreators } from './duck';
import { ICspf, fromJSON } from './models/cspf';

export function* updateCspf(suppliers: ICspf[]) {
  const cspfRecord = suppliers.map(fromJSON);
  yield put(cspfCreators.update(cspfRecord));
  return cspfRecord;
}

export function* fetchCspf() {
  const response = yield call(api.get, '/cspf');
  yield updateCspf(response.data.providers);
  return response.data;
}
