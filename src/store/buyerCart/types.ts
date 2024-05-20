import { ICartProduct } from "@/types/products";

export interface ICategoriesState {
  list: ICartProduct[];
}

export const BUYER_CART_KEY = "aws_store_buyer_cart" as const;
export const SLICE_NAME = "buyerCart" as const;
