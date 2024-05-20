import { IFetchedProduct } from "@/types/products";
import { AxiosResponse } from "axios";

export type PaginateParams = {
  total: number;
  skip: number;
  limit: number;
};

type Response = {
  products: IFetchedProduct[];
} & PaginateParams;

export type AxiosDataResponse = AxiosResponse<Response>;
