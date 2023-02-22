import { describe, expect, test } from "@jest/globals";
import { isObjEmpty } from "../src/utils/object";

describe("Testing All Utils Object Success", () => {
  test("Check object empty", () => {
    expect(isObjEmpty({})).toBe(true);
  });
});

describe("Testing All Utils Object Error", () => {
  test("Check object empty", () => {
    expect(isObjEmpty({})).not.toBe(false);
  });
});
