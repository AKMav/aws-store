import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "@/store";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { CategoryListTestId, LoaderTestId } from "./constants";
import { CategoriesList } from "../CategoriesList";

describe("CategoriesList: отрисовка списка категорий", () => {
  it("отображается список после загрузки категорий, loader скрыт", async () => {
    const { findByTestId, queryByTestId } = render(
      <Provider store={store}>
        <CategoriesList />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const list = await findByTestId(CategoryListTestId);
    expect(list).toBeInTheDocument();
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
    expect(loader).toBeInTheDocument();
    const list = queryByTestId(CategoryListTestId);
    expect(list).not.toBeInTheDocument();
  });
});
