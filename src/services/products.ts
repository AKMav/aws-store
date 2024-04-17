import { httpClient } from "./axios";
import { IProductsGetOptions } from "./types";

export const fetchProductsByCategory = async (options: IProductsGetOptions) => {
  const searchQuery = {
    ...(options.queries.limit
      ? { limit: options.queries.limit.toString() }
      : {}),
    ...(options.queries.skip ? { limit: options.queries.skip.toString() } : {}),
  };
  const params = new URLSearchParams(Object.entries(searchQuery));
  const url = options.category
    ? `/products/category/${options.category}?${params}`
    : `/products/?${params}`;
  return httpClient.get(url);
};

export const fetchCategories = () => {
  return httpClient.get("/products/categories");
};
