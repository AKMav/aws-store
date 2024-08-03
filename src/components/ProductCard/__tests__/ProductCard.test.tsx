import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { IProductCard } from "@/types/products";
import { ProductCard } from "../ProductCard";
import { TEST_ID_ADD_BTN, TEST_ID_CARD_MAIN, TEST_PRODUCT } from "./constants";

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
