import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        item.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    incrementQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.qty += 1;

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    decrementQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
} = cartSlice.actions;

export default cartSlice.reducer;
