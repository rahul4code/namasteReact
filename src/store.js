import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import activeOffset from "./slices/activeOffset";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurantOptions:activeOffset
  },
});

export default store;
