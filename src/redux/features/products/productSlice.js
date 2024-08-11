import { createSlice } from "@reduxjs/toolkit";
import { getProductsAction } from "../actions/productActions";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductsAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ProductSlice.reducer;
