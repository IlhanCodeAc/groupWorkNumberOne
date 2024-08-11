import { createSlice } from "@reduxjs/toolkit";
import { deleteProductsAction } from "../actions/deleteAction";

const ProductDeleteSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteProductsAction.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default ProductDeleteSlice.reducer;
