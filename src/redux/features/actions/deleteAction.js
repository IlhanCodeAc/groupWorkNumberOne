import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteProducts } from "../../../services/deleteProduct";

export const deleteProductsAction = createAsyncThunk("products/delete", deleteProducts);
