import { useMemo } from "react";
import { ICartProduct } from "@/types/products";

export const useTotalPrice = (list: ICartProduct[]) => {
  const totalPrice = useMemo(
    () =>
      list.reduce(
        (acc, { price, quantity, priceWithDiscount }) =>
          acc + (priceWithDiscount || price) * quantity,
        0
      ),
    [list]
  );

  return { totalPrice };
};
