import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import activeOffset from "./slices/activeOffset";
import restaurantList from "./slices/restaurantList";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurantOptions:activeOffset,
    restaurants:restaurantList
  },
});

export default store;
