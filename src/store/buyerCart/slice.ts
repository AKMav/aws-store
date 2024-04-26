import { createSlice } from "@reduxjs/toolkit";
import { ICategoriesState } from "./types";
import { updateAll, addProduct, removeProduct } from "./actions";

const initialState: ICategoriesState = {
  list: [],
};

const categoriesSlice = createSlice({
  name: "buyerCart",
  initialState,
  reducers: {
    updateAll,
    addProduct,
    removeProduct,
  },
});

export default categoriesSlice.reducer;

export const {
  updateAll: updateCartList,
  addProduct: addProductToCart,
  removeProduct: removeProductFromCart,
} = categoriesSlice.actions;
