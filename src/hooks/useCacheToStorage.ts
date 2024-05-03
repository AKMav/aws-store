import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { WISH_LIST_KEY } from "@/store/wishlist";
import { BUYER_CART_KEY } from "@/store/buyerCart";

export const useCacheWishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.list);

  useEffect(() => {
    localStorage.setItem(WISH_LIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);
};

export const useCacheCart = () => {
  const buyerCartList = useSelector((state: RootState) => state.buyerCart.list);

  useEffect(() => {
    localStorage.setItem(BUYER_CART_KEY, JSON.stringify(buyerCartList));
  }, [buyerCartList]);
};
