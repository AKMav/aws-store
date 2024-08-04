import { IProductCard } from "@/types/products";

export const TEST_ID_CARD_MAIN = "test-id-card-main";
export const TEST_ID_ADD_BTN = "test-id-add-btn";
export const TEST_ID_COMMENTS = "test-id-comment";

export const TEST_ADD_TO_CART_TEXT = "Add To Cart";
export const TEST_REMOVE_FROM_CART_TEXT = "Remove From Cart";
export const TEST_REMOVE_BTN_CLASS = "product-card__cart-button_remove";
export const TEST_PRICE_WITH_DISCOUNT = 950;
export const TEST_PRICE_WITH_DISCOUNT_TEXT = "$950";
export const TEST_OLD_PRICE_CLASS = "product-card__price_discount";

export const TEST_PRODUCT: IProductCard = {
  id: 1,
  name: "testName",
  price: 1000,
  mainPicture: "testPictureSrc",
  rating: 4,
};
