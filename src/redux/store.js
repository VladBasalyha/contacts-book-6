import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

const rootReducer = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistRootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
