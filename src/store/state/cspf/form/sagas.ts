import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { SaveCspfAsyncAction, CspfFormTypes } from './types';
import api from '../../../../services/api';
import { cspfFormCreators } from './duck';

function* watchSaveCspf({ payload }: SaveCspfAsyncAction) {
  try {
    const data = {
      ...payload.data,
      data_nasc: format(payload.data.data_nasc!, 'yyyy-MM-dd'),
    };

    yield call(api.post, '/cspf', { ...data });
    yield put(cspfFormCreators.saveSuccess());
    toast.success('Pessoa física cadastrada com sucesso!');
  } catch (er) {
    yield put(cspfFormCreators.saveFailure());
    toast.error('Erro ao salvar pessoa física');
  }
}

export default [takeLatest(CspfFormTypes.SAVE_CSPF_ASYNC, watchSaveCspf)];
