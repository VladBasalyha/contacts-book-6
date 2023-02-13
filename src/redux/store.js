<<<<<<< Updated upstream
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from 'redux/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
=======
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactReduser from "./contactSlice";
import { persistStore, persistReducer,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
  };

  const rootReducer = combineReducers({
    contacts: contactReduser,
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer:  persistedReducer,
    middleware: (getDefaultMiddleware) =>
>>>>>>> Stashed changes
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;