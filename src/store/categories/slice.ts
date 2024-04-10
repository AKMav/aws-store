import { createSlice } from "@reduxjs/toolkit";
import { ICategoriesState } from "./types";
import { updateAll } from "./actions";

const initialState: ICategoriesState = {
  list: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    updateAll,
  },
});

export default categoriesSlice.reducer;

export const { updateAll: updateAllCategories } = categoriesSlice.actions;
