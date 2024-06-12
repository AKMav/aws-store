import { httpClient } from "@/services/axios";
import { IFetchedCategory } from "./types";

export const fetchCategories = () => {
  return httpClient.get<IFetchedCategory[]>("/products/categories");
};
