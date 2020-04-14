import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import createStore from './createStore';
import persistedReducers from './persistReducers';

import { reducers, rootSagas } from './state';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? // eslint-disable-next-line no-console
      console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistedReducers(reducers), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store, persistor };
