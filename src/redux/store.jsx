import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './store/CryptoSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;
