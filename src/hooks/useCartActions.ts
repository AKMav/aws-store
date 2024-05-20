import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  removeProductFromCart,
  addProductToCartWithQuantity,
} from "@/store/buyerCart";
import { IProductCard } from "@/types/products";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const buyerCartList = useSelector((state: RootState) => state.buyerCart.list);

  const onSimpleProductAddToCart = (product: IProductCard) => {
    dispatch(addProductToCartWithQuantity({ product, quantity: 1 }));
  };

  const onProductAddToCartWithQuantity = (payload: {
    product: IProductCard;
    quantity: number;
  }) => {
    const id = payload.product.id;

    if (isProductInCart(id)) {
      onProductRemoveFromCart(id);
    }

    dispatch(addProductToCartWithQuantity(payload));
  };

  const onProductRemoveFromCart = (id: IProductCard["id"]) => {
    dispatch(removeProductFromCart(id));
  };

  const isProductInCart = (id: IProductCard["id"]) =>
    buyerCartList.findIndex((item) => item.id === id) > -1;

  return {
    buyerCartList,
    onSimpleProductAddToCart,
    onProductAddToCartWithQuantity,
    onProductRemoveFromCart,
    isProductInCart,
  };
};
