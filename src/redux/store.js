import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //  (за замовчуванням локальне сховище для Інтернету)

import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}

// Додавання змін в LocalStorage
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
console.log(store);

export const persistor = persistStore(store);
