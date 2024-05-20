import { PayloadAction } from "@reduxjs/toolkit";
import { IProductCard } from "@/types/products";
import { ICategoriesState } from "./types";

const updateAll = (
  state: ICategoriesState,
  action: PayloadAction<IProductCard[]>
) => {
  state.list = action.payload;
};

const addNew = (
  state: ICategoriesState,
  action: PayloadAction<IProductCard>
) => {
  state.list = [...state.list, action.payload];
};

const removeExist = (
  state: ICategoriesState,
  action: PayloadAction<IProductCard["id"]>
) => {
  state.list = [...state.list].filter(({ id }) => action.payload !== id);
};

export { updateAll, addNew, removeExist };
