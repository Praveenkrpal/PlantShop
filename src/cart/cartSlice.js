import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    subtotal: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          specificName: newItem.specificName,
          price: newItem.price,
          imageUrl: newItem.image,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
      
      state.totalQuantity++;
      state.subtotal += newItem.price;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
      }
      
      state.totalQuantity--;
      state.subtotal -= existingItem.price;
    },
    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      state.items = state.items.filter(item => item.id !== id);
      state.totalQuantity -= existingItem.quantity;
      state.subtotal -= existingItem.price * existingItem.quantity;
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.subtotal = 0;
    }
  }
});

export const { 
  addItemToCart, 
  removeItemFromCart, 
  deleteItemFromCart, 
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;