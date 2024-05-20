export const getPriceWithDiscount = (price: number, discount?: number) => {
  return discount ? Math.round(price - (price * discount) / 100) : price;
};
