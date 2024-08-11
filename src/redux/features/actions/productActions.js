import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../../services/getProducts";

export const getProductsAction = createAsyncThunk('products/get',getProducts)