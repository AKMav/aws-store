import { IProductCard, IFullProduct } from "@/types/products";
import { IFetchedProduct } from "@/api/products";
import { getPriceWithDiscount, getValuableDiscount } from "@/helpers";

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
  const valuableDiscount = getValuableDiscount({ price, discountPercentage });

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
  availabilityStatus,
  rating,
  thumbnail,
  images,
  stock,
  description,
}: IFetchedProduct): IFullProduct => {
  const valuableDiscount = getValuableDiscount({ discountPercentage, price });

  return {
    id,
    price,
    rating,
    images,
    description,
    availabilityStatus,
    stock,
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
