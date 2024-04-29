import { PayloadAction } from "@reduxjs/toolkit";
import { IProductCard, ICartProduct } from "@/types/products";
import { ICategoriesState } from "./types";

const updateAll = (
  state: ICategoriesState,
  action: PayloadAction<ICartProduct[]>
) => {
  state.list = action.payload;
};

const addProduct = (
  state: ICategoriesState,
  action: PayloadAction<IProductCard>
) => {
  const { id, price, name, mainPicture } = action.payload;
  const product: ICartProduct = { id, name, price, mainPicture, quantity: 1 };
  state.list = [...state.list, product];
};

const removeProduct = (
  state: ICategoriesState,
  action: PayloadAction<IProductCard["id"]>
) => {
  state.list = [...state.list].filter(({ id }) => action.payload !== id);
};

export { updateAll, addProduct, removeProduct };
