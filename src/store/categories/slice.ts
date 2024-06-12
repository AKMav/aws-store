import { createSlice } from "@reduxjs/toolkit";
import { ICategoriesState } from "./types";
import { updateAll, setCategory } from "./actions";
import { getCategoryByUrl } from "@/helpers/getCategoryByUrl";
import { SLICE_NAME } from "./constants";

const currentCategory = getCategoryByUrl();

const initialState: ICategoriesState = {
  list: [],
  currentCategory,
};

const categoriesSlice = createSlice({
  name: SLICE_NAME,
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
