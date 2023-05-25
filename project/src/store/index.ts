import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/main-reducer';
import { createAPI } from '../utils/api';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
