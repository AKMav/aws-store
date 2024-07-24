import { afterEach, describe, it, expect } from "vitest";
import { getListFromStorage } from "../../";
import { ITestObject } from "./types";
import { TEST_LIST_KEY, TEST_LIST } from "./constants";

describe("getListFromStorage: получение списка из локального хранилища", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("предварительно сохраненный список", () => {
    localStorage.setItem(TEST_LIST_KEY, JSON.stringify(TEST_LIST));
    const list = getListFromStorage<ITestObject[]>(TEST_LIST_KEY);
    expect(list).toStrictEqual(TEST_LIST);
  });

  it("пустой список", () => {
    const list = getListFromStorage(TEST_LIST_KEY);
    expect(list).toStrictEqual([]);
  });
});
