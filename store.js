import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balanceSlice';

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});
