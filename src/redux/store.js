import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  // devTools: process.env.NODE_ENV !== 'production',
});