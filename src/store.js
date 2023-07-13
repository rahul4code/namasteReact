import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import activeTabSlice from "./slices/activeTabSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    activeTab:activeTabSlice
  },
});

export default store;
