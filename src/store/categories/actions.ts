import { PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "@/types/categories";
import { ICategoriesState } from "./types";

const updateAll = (
  state: ICategoriesState,
  action: PayloadAction<ICategory[]>
) => {
  state.list = action.payload;
};

const setCategory = (
  state: ICategoriesState,
  action: PayloadAction<string>
) => {
  state.currentCategory = action.payload;
};

export { updateAll, setCategory };
