import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const editProduct = async ({ id }) => {
  const response = await axios.patch(`${BASE_URL}/products/${id}`);
  return response.data;
};
