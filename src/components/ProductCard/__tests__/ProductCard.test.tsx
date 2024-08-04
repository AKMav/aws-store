import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { IProductCard } from "@/types/products";
import { ProductCard } from "../ProductCard";
import {
  TEST_ID_ADD_BTN,
  TEST_ID_CARD_MAIN,
  TEST_ID_COMMENTS,
  TEST_PRODUCT,
  TEST_REMOVE_FROM_CART_TEXT,
  TEST_ADD_TO_CART_TEXT,
  TEST_PRICE_WITH_DISCOUNT,
  TEST_PRICE_WITH_DISCOUNT_TEXT,
  TEST_REMOVE_BTN_CLASS,
  TEST_OLD_PRICE_CLASS,
} from "./constants";

describe("ProductCard: проверка компонента на наличие флага isNew", () => {
  it("карточка продукта имеет лэйбл 'NEW'", () => {
    const _product: IProductCard = { ...TEST_PRODUCT, isNew: true };

    const { getByText } = render(
      <ProductCard
        product={_product}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        onAddToWishlist={() => {}}
        onRemoveFromWishlist={() => {}}
        onOpenProduct={() => {}}
      />
    );

    const tagNew = getByText("NEW");
    expect(tagNew).toBeInTheDocument();
  });

  it("карточка продукта не имеет лэйбла 'NEW'", () => {
    const _product: IProductCard = { ...TEST_PRODUCT, isNew: false };

    const { queryByText } = render(
      <ProductCard
        product={_product}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        onAddToWishlist={() => {}}
        onRemoveFromWishlist={() => {}}
        onOpenProduct={() => {}}
      />
    );

    const tagNew = queryByText("NEW");
    expect(tagNew).not.toBeInTheDocument();
  });
});

describe("ProductCard: проверка компонента на наличие скидки", () => {
  it("карточка продукта имеет указатель скидки = '-15%'", () => {
    const _product: IProductCard = { ...TEST_PRODUCT, discountPercentage: 15 };

    const { getByText } = render(
      <ProductCard
        product={_product}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        onAddToWishlist={() => {}}
        onRemoveFromWishlist={() => {}}
        onOpenProduct={() => {}}
      />
    );

    const tagNew = getByText(/-15%/i);
    expect(tagNew).toBeInTheDocument();
  });

  it("карточка продукта не имеет скидки", () => {
    const _product: IProductCard = {
      ...TEST_PRODUCT,
      discountPercentage: null,
    };

    const { queryByText } = render(
      <ProductCard
        product={_product}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        onAddToWishlist={() => {}}
        onRemoveFromWishlist={() => {}}
        onOpenProduct={() => {}}
      />
    );

    const tagNew = queryByText(/-[0-9]*%/);
    expect(tagNew).not.toBeInTheDocument();
  });
});

describe("ProductCard: проверка кнопки добавления/удаления из корзины", () => {
  const SHOW_CLASS = "show";

  it(`при наведении на карточку товара кнопка addOrRemoveBtn отображается за счет добавления класса '${SHOW_CLASS}' и скрывается при покидании курсора`, () => {
    const { getByTestId, queryByTestId } = render(
      <ProductCard
        product={TEST_PRODUCT}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        onAddToWishlist={() => {}}
        onRemoveFromWishlist={() => {}}
        onOpenProduct={() => {}}
      />
    );

    const cardMain = getByTestId(TEST_ID_CARD_MAIN);
    fireEvent.mouseEnter(cardMain);
    const addRemoveBtn = queryByTestId(TEST_ID_ADD_BTN);
    expect(addRemoveBtn?.classList.contains(SHOW_CLASS)).toBeTruthy();
    fireEvent.mouseLeave(cardMain);
    expect(addRemoveBtn?.classList.contains(SHOW_CLASS)).not.toBeTruthy();
  });
});

describe("ProductCard: проверка кнопки добавления/удаления из корзины в зависимости от входного параметра 'isProductInCart'", () => {
  it(`пропс isProductInCart имеет ложное значение, кнопка будет иметь текст '${TEST_ADD_TO_CART_TEXT}'`, () => {
    const { getByText } = render(
      <ProductCard
        product={TEST_PRODUCT}
        isProductInCart={false}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        onAddToWishlist={() => {}}
        onRemoveFromWishlist={() => {}}
        onOpenProduct={() => {}}
      />
    );

    const button = getByText(TEST_ADD_TO_CART_TEXT);
    expect(button).toBeInTheDocument();
  });

  it(`пропс isProductInCart имеет истинное значение, кнопка будет иметь текст '${TEST_REMOVE_FROM_CART_TEXT}' и класс '${TEST_REMOVE_BTN_CLASS}'`, () => {
    const { getByText } = render(
      <ProductCard
        isProductInCart
        product={TEST_PRODUCT}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        onAddToWishlist={() => {}}
        onRemoveFromWishlist={() => {}}
        onOpenProduct={() => {}}
      />
    );

    const button = getByText(TEST_REMOVE_FROM_CART_TEXT);
    expect(button).toBeInTheDocument();
    expect(button.classList.contains(TEST_REMOVE_BTN_CLASS)).toBeTruthy();
  });
});

describe("ProductCard: проверка отображения цены в карточке", () => {
  it(`priceWithDiscount = ${TEST_PRICE_WITH_DISCOUNT}, цена без скидки ${TEST_PRODUCT.price} имеет класс-'${TEST_OLD_PRICE_CLASS}`, () => {
    const { getByText } = render(
      <ProductCard
        product={{
          ...TEST_PRODUCT,
          priceWithDiscount: TEST_PRICE_WITH_DISCOUNT,
        }}
        isProductInCart={false}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        onAddToWishlist={() => {}}
        onRemoveFromWishlist={() => {}}
        onOpenProduct={() => {}}
      />
    );

    const currentPriceSpan = getByText(TEST_PRICE_WITH_DISCOUNT_TEXT);
    expect(currentPriceSpan).toBeInTheDocument();
    const oldPriceSpan = getByText(`$${TEST_PRODUCT.price}`);
    expect(oldPriceSpan).toBeInTheDocument();
    expect(oldPriceSpan.classList.contains(TEST_OLD_PRICE_CLASS)).toBeTruthy();
  });

  it("цены со скидкой нет, отображается цена товара", () => {
    const { getByText } = render(
      <ProductCard
        product={TEST_PRODUCT}
        isProductInCart={false}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        onAddToWishlist={() => {}}
        onRemoveFromWishlist={() => {}}
        onOpenProduct={() => {}}
      />
    );

    const currentPriceSpan = getByText(`$${TEST_PRODUCT.price}`);
    expect(currentPriceSpan).toBeInTheDocument();
  });
});

describe("ProductCard: проверка отображения количества комментариев", () => {
  it("комментариев нет, строка комментариев не отображается", () => {
    const { queryByTestId } = render(
      <ProductCard
        product={{
          ...TEST_PRODUCT,
          commentsCount: 0,
        }}
        isProductInCart={false}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        onAddToWishlist={() => {}}
        onRemoveFromWishlist={() => {}}
        onOpenProduct={() => {}}
      />
    );

    const commentSpan = queryByTestId(TEST_ID_COMMENTS);
    expect(commentSpan).not.toBeInTheDocument();
  });

  it("количество комментариев = 10, строка комментариев содержит текст = (10)", () => {
    const { queryByTestId } = render(
      <ProductCard
        product={{
          ...TEST_PRODUCT,
          commentsCount: 10,
        }}
        isProductInCart={false}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        onAddToWishlist={() => {}}
        onRemoveFromWishlist={() => {}}
        onOpenProduct={() => {}}
      />
    );

    const commentSpan = queryByTestId(TEST_ID_COMMENTS);
    expect(commentSpan?.textContent).toEqual("(10)");
  });
});

describe("ProductCard: проверка отображения рейтинга товара", () => {
  const TEST_RATING_TITLE = `${TEST_PRODUCT.rating} out of 5`; // title get by library

  it(`в карточке отображается с атрибутом title=${TEST_RATING_TITLE} на основе рейтинга товара`, () => {
    const { queryByTitle } = render(
      <ProductCard
        product={TEST_PRODUCT}
        isProductInCart={false}
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        onAddToWishlist={() => {}}
        onRemoveFromWishlist={() => {}}
        onOpenProduct={() => {}}
      />
    );

    const ratingSpan = queryByTitle(TEST_RATING_TITLE);
    expect(ratingSpan).toBeInTheDocument();
  });
});
