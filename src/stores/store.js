import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/ProductsSlice";

const store = configureStore({
  reducer: {
    productsStore: productSlice,
  },
});

export default store;
