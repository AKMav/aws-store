import { createSlice } from "@reduxjs/toolkit";
import { getListFromStorage } from "@/helpers";
import { ICategoriesState } from "./types";
import { WISH_LIST_KEY, SLICE_NAME } from "./constants";
import { updateAll, addNew, removeExist } from "./actions";

const initialState: ICategoriesState = {
  list: getListFromStorage<ICategoriesState["list"]>(WISH_LIST_KEY),
};

const categoriesSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    updateAll,
    addNew,
    removeExist,
  },
});

export default categoriesSlice.reducer;

export const {
  updateAll: updateWishlist,
  addNew: addToWishlist,
  removeExist: removeFromWishlist,
} = categoriesSlice.actions;
