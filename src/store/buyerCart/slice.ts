import { createSlice } from "@reduxjs/toolkit";
import { ICategoriesState, BUYER_CART_KEY } from "./types";
import {
  updateAll,
  addProduct,
  removeProduct,
  changeQuantity,
} from "./actions";

const listFromStorage = localStorage.getItem(BUYER_CART_KEY);
const buyerCartInit: ICategoriesState["list"] = listFromStorage
  ? JSON.parse(listFromStorage)
  : [];

const initialState: ICategoriesState = {
  list: buyerCartInit,
};

const categoriesSlice = createSlice({
  name: "buyerCart",
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
