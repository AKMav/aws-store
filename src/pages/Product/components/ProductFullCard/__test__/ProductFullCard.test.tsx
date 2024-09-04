import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { worker } from "@/mocks/browser";
import { ProductFullCard } from "../ProductFullCard";
import { FULLCARD_CONTAINER_TEST_ID } from "./constants";

describe("ProductFullCard: отрисовка карточки товара с полученными данными", async () => {
  await worker.start();

  it("карточка товара запрашивает моковые данные и корректно их отображает", async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <ProductFullCard id="testId" />
      </Provider>,
      {
        wrapper: BrowserRouter,
      }
    );

    const fullCardContainer = await findByTestId(FULLCARD_CONTAINER_TEST_ID);
    expect(fullCardContainer).toBeInTheDocument();
  });
});
