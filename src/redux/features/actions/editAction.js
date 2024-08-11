import { createAsyncThunk } from "@reduxjs/toolkit";
import { editProductAction } from "../../../services/deleteProduct";

export const editProductAction = createAsyncThunk(
  "products/edit",
  editProduct
);
