import { configureStore, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';

// persist let's you rehydrate the redux store upon page reloads
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // defined keys of the state that you do not wish to persist
  blacklist: [],
};

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
  // add any ignored paths here
  ignoredPaths: [],
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the redux store using the root reducer and export it
const store = configureStore({
  reducer: persistedReducer,
  middleware: [immutableInvariantMiddleware],
});

export default store;
