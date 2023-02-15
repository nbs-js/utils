import { describe, expect, test } from "@jest/globals";
import { arraySumValue } from "../src/utils/array";

describe("Testing All Utils Array Success", () => {
  test("Counting All Array", () => {
    expect(arraySumValue([1, 2])).toBe(3);
  });
});

describe("Testing All Utils Array Error", () => {
  test("Counting All Array", () => {
    expect(arraySumValue([1, 2])).not.toBe(4);
  });
});
