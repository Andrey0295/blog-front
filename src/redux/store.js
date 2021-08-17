import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import articlesReducer from './articles/articles-reducers';

import authReducer from './auth/auth-reducers';

const authPersistConfig = {
  key: 'auth-key',
  storage,
  whitelist: ['token', 'providerToken'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    articles: articlesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),

  devTools: true,
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
