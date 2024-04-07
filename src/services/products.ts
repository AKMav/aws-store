import { httpClient } from "./axios";

export const fetchProducts = async () => {
  httpClient.get("/products");
};

export const fetchCategories = () => {
  return httpClient.get("/products/categories");
};
