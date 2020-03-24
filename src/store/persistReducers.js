import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'cobamdigital',
      storage,
      whitelist: ['authReducer', 'userReducer'],
    },
    reducers,
  );
  return persistedReducers;
};
