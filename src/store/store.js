import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/features/products/productSlice'

export const store = configureStore({
  reducer: {
    products:productReducer
  },
});
