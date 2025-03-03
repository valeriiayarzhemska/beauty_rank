import AsyncStorage from '@react-native-async-storage/async-storage';
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

import { api } from './services/api';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
