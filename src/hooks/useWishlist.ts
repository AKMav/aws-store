import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addToWishlist, removeFromWishlist } from "@/store/wishlist";
import { IProductCard } from "@/types/products";

export const useWishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.list);

  const isProductInWishlist = useCallback(
    (id?: string | number) =>
      id ? wishlist.findIndex((item) => item.id === Number(id)) > -1 : false,
    [wishlist]
  );

  const onProductAddToWishlist = <T extends IProductCard>(product: T) => {
    dispatch(addToWishlist(product));
  };

  const onProductRemoveFromWishlist = (id: IProductCard["id"]) => {
    dispatch(removeFromWishlist(id));
  };

  return {
    isProductInWishlist,
    onProductAddToWishlist,
    onProductRemoveFromWishlist,
  };
};
