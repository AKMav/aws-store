import { IFetchedProduct, IProductCard, IFullProduct } from "@/types/products";
import { getPriceWithDiscount } from "@/helpers";

export const formatFetchedProductsForCard = (
  source: IFetchedProduct[]
): IProductCard[] => {
  return source.map(formatFetchedProductForCard);
};

const formatFetchedProductForCard = ({
  id,
  title,
  price,
  discountPercentage,
  rating,
  thumbnail,
}: IFetchedProduct): IProductCard => {
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
      (valuableDiscount && getPriceWithDiscount(price, discountPercentage)) ||
      null,
  };
};

export const formatFetchedProductForFullCard = ({
  id,
  title,
  price,
  discountPercentage,
  rating,
  thumbnail,
  images,
  stock,
  description,
}: IFetchedProduct): IFullProduct => {
  const valuableDiscount = discountPercentage > 15;

  return {
    id,
    price,
    rating,
    images,
    description,
    stock: stock > 0,
    discountPercentage: valuableDiscount ? discountPercentage : null,
    name: title,
    mainPicture: thumbnail,
    commentsCount: Math.round(Math.random() * 100),
    isNew: !valuableDiscount,
    priceWithDiscount:
      (valuableDiscount && getPriceWithDiscount(price, discountPercentage)) ||
      null,
  };
};
