import { createSlice } from "@reduxjs/toolkit";
import { ICategoriesState } from "./types";
import { updateAll, setCategory } from "./actions";

const params = new URLSearchParams(document.location.search);
const CATEGORY = "category";

const initialState: ICategoriesState = {
  list: [],
  currentCategory: params.get(CATEGORY) || "",
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
