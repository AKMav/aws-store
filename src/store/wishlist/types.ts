import { IProductCard } from "@/types/products";

export interface ICategoriesState {
  list: IProductCard[];
}

export const WISH_LIST_KEY = "aws_store_wishlist" as const;
export const SLICE_NAME = "wishlist" as const;
