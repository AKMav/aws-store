import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { BUYER_CART_KEY } from "@/store/buyerCart";

export const useSaveBuyerCart = () => {
  const buyerCartList = useSelector((state: RootState) => state.buyerCart.list);

  useEffect(() => {
    localStorage.setItem(BUYER_CART_KEY, JSON.stringify(buyerCartList));
  }, [buyerCartList]);
};
