import { httpClient } from "./axios";
import { IProductsGetOptions } from "./types";

export const fetchProductsByCategory = async (options: IProductsGetOptions) => {
  const params = new URLSearchParams(Object.entries(options.queries));
  const url = options.category
    ? `/products/category/${options.category}?${params}`
    : `/products/?${params}`;
  return httpClient.get(url);
};

export const fetchCategories = () => {
  return httpClient.get("/products/categories");
};
