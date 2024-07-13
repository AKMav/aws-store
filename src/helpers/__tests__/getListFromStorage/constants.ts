import { ITestObject } from "./types";

const TEST_OBJECT: ITestObject = {
  stringField: "test",
  numberField: 1,
};

export const TEST_LIST: ITestObject[] = new Array(5).fill(TEST_OBJECT);

export const TEST_LIST_KEY = "test-list-key";
