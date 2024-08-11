import { createSlice } from "@reduxjs/toolkit";
import { getProductsAction } from "../actions/productActions";


const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsAction.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default ProductSlice.reducer;