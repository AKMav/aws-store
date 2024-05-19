import { createSlice } from "@reduxjs/toolkit";
import { ICategoriesState, BUYER_CART_KEY, SLICE_NAME } from "./types";
import { getListFromStorage } from "@/helpers";
import {
  updateAll,
  removeProduct,
  changeQuantity,
  addProductWithQuantity,
} from "./actions";

const initialState: ICategoriesState = {
  list: getListFromStorage<ICategoriesState["list"]>(BUYER_CART_KEY),
};

const categoriesSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    updateAll,
    removeProduct,
    changeQuantity,
    addProductWithQuantity,
  },
});

export default categoriesSlice.reducer;

export const {
  updateAll: updateCartList,
  addProductWithQuantity: addProductToCartWithQuantity,
  removeProduct: removeProductFromCart,
  changeQuantity: cartProductQuantityChange,
} = categoriesSlice.actions;
