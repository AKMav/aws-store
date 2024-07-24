import { afterEach, describe, it, expect } from "vitest";
import { getCategoryByUrl } from "../../getCategoryByUrl";
import { QUERY_NAME, QUERY_VALUE } from "./constants";

describe("getCategoryByUrl: получение категории из строки запроса", () => {
  afterEach(() => {
    window.location.search = "";
  });

  it("Получение предустановленного значения", () => {
    window.location = {
      ...window.location,
      search: `?${QUERY_NAME}=${QUERY_VALUE}`,
    };
    expect(getCategoryByUrl()).toBe(QUERY_VALUE);
  });

  it("Получение пустой строки", () => {
    expect(getCategoryByUrl()).toBe("");
  });
});
