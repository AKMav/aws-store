import { IFetchedProduct, IProductCard } from "@/types/products";

export const formatFetchedProductForCard = (
  source: IFetchedProduct[]
): IProductCard[] => {
  return source.map(
    ({ id, title, price, discountPercentage, rating, thumbnail }) => ({
      id,
      price,
      rating,
      discountPercentage,
      name: title,
      mainPicture: thumbnail,
      commentsCount: Math.round(Math.random() * 100),
      isNew: Math.random() > 0.5,
    })
  );
};
