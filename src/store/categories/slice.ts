import { createSlice } from "@reduxjs/toolkit";
import { ICategoriesState } from "./types";
import { updateAll, setCategory } from "./actions";
import { CATEGORY } from "@/types/categories";

const params = new URLSearchParams(document.location.search);

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
