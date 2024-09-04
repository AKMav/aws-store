import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "@/store";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { worker } from "@/mocks/browser";
import { fetchedCategoriesResponse } from "@/mocks/constants/categories";
import { CategoryListTestId, LoaderTestId } from "./constants";
import { CategoriesList } from "../CategoriesList";

describe("CategoriesList: отрисовка списка категорий", async () => {
  await worker.start();

  it("отображается список после загрузки категорий, loader скрыт", async () => {
    const { findByTestId, queryByTestId } = render(
      <Provider store={store}>
        <CategoriesList />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const list = await findByTestId(CategoryListTestId);
    expect.element(list).toBeInTheDocument();
    expect(list.children.length - 1).equal(fetchedCategoriesResponse.length);

    const loader = queryByTestId(LoaderTestId);
    expect(loader).not.toBeInTheDocument();
  });

  it("отображается loader, список категорий еще не загружен", async () => {
    const { findByTestId, queryByTestId } = render(
      <Provider store={store}>
        <CategoriesList />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const loader = await findByTestId(LoaderTestId);
    expect.element(loader).toBeInTheDocument();

    const list = queryByTestId(CategoryListTestId);
    expect(list).not.toBeInTheDocument();
  });
});
