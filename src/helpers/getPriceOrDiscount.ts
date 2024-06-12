export const getValuableDiscount = ({
  discountPercentage,
  price,
}: {
  discountPercentage: number;
  price: number;
}) => {
  return (
    price > 5 &&
    Math.round(discountPercentage) < 15 &&
    Math.floor(discountPercentage) > 5
  );
};

export const getPriceWithDiscount = (price: number, discount?: number) => {
  return discount ? Math.round(price - (price * discount) / 100) : price;
};
