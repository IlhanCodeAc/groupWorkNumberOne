import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/features/products/productSlice'
import themeReducer from "../redux/features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    products:productReducer,
    theme: themeReducer,
  },
});
