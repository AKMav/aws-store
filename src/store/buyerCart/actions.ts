import { PayloadAction } from "@reduxjs/toolkit";
import { IProductCard } from "@/types/products";
import { ICategoriesState } from "./types";

const updateAll = (
  state: ICategoriesState,
  action: PayloadAction<IProductCard[]>
) => {
  state.list = action.payload;
};

const addProduct = (
  state: ICategoriesState,
  action: PayloadAction<IProductCard>
) => {
  state.list = [...state.list, action.payload];
};

const removeProduct = (
  state: ICategoriesState,
  action: PayloadAction<IProductCard>
) => {
  state.list = [...state.list].filter(({ id }) => action.payload.id !== id);
};

export { updateAll, addProduct, removeProduct };
