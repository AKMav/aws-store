import { PayloadAction } from "@reduxjs/toolkit";
import { IProductCard, ICartProduct } from "@/types/products";
import { ICategoriesState } from "./types";

const updateAll = (
  state: ICategoriesState,
  action: PayloadAction<ICartProduct[]>
) => {
  state.list = action.payload;
};

const addProductWithQuantity = (
  state: ICategoriesState,
  action: PayloadAction<{ product: IProductCard; quantity: number }>
) => {
  const { id, price, name, mainPicture, priceWithDiscount } =
    action.payload.product;
  const product: ICartProduct = {
    id,
    name,
    price,
    priceWithDiscount,
    mainPicture,
    quantity: action.payload.quantity,
  };
  state.list = [...state.list, product];
};

const changeQuantity = (
  state: ICategoriesState,
  action: PayloadAction<{ id: IProductCard["id"]; quantity: number }>
) => {
  const newList = [...state.list].map((product) =>
    product.id === action.payload.id
      ? { ...product, quantity: action.payload.quantity }
      : product
  );
  state.list = newList;
};

const removeProduct = (
  state: ICategoriesState,
  action: PayloadAction<IProductCard["id"]>
) => {
  state.list = [...state.list].filter(({ id }) => action.payload !== id);
};

export { updateAll, addProductWithQuantity, removeProduct, changeQuantity };
