import { createSlice } from "@reduxjs/toolkit";
import { ICategoriesState, BUYER_CART_KEY, SLICE_NAME } from "./types";
import { getListFromStorage } from "@/helpers";
import {
  updateAll,
  addProduct,
  removeProduct,
  changeQuantity,
} from "./actions";

const initialState: ICategoriesState = {
  list: getListFromStorage<ICategoriesState["list"]>(BUYER_CART_KEY),
};

const categoriesSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    updateAll,
    addProduct,
    removeProduct,
    changeQuantity,
  },
});

export default categoriesSlice.reducer;

export const {
  updateAll: updateCartList,
  addProduct: addProductToCart,
  removeProduct: removeProductFromCart,
  changeQuantity: cartProductQuantityChange,
} = categoriesSlice.actions;
