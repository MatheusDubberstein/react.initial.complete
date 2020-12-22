import { persistReducer } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage,
      whitelist: ['auth', 'configurations'],
      transforms: [createBlacklistFilter('auth', ['loading', 'error'])],
    },
    reducers
  );

  return persistedReducer;
};
