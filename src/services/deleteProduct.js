import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const deleteProducts = async ({ id }) => {
  const response = await axios.delete(`${BASE_URL}/products/${id}`);
  return response.data;
};

