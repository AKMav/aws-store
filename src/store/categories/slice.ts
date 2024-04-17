import { createSlice } from "@reduxjs/toolkit";
import { ICategoriesState } from "./types";
import { updateAll, setCategory } from "./actions";

const initialState: ICategoriesState = {
  list: [],
  currentCategory: "",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    updateAll,
    setCategory,
  },
});

export default categoriesSlice.reducer;

export const {
  updateAll: updateAllCategories,
  setCategory: setCurrentCategory,
} = categoriesSlice.actions;
