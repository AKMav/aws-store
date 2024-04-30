import { IFetchedProduct, IProductCard } from "@/types/products";
import { getPriceWithDiscount } from "@/helpers";

export const formatFetchedProductForCard = (
  source: IFetchedProduct[]
): IProductCard[] => {
  return source.map(
    ({ id, title, price, discountPercentage, rating, thumbnail }) => {
      const valuableDiscount = discountPercentage > 15;

      return {
        id,
        price,
        rating,
        discountPercentage: valuableDiscount ? discountPercentage : null,
        name: title,
        mainPicture: thumbnail,
        commentsCount: Math.round(Math.random() * 100),
        isNew: !valuableDiscount,
        priceWithDiscount:
          (valuableDiscount &&
            getPriceWithDiscount(price, discountPercentage)) ||
          null,
      };
    }
  );
};
