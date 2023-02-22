import { describe, expect, test } from "@jest/globals";
import { formatCurrency } from "../src/formatter/number";

describe("Testing All Formatter Date", () => {
  test("change number 1000000 to currency 1.000.000", () => {
    expect(formatCurrency(1000000)).toBe("1.000.000");
  });
  test("change number 1000000 with options to currency indonesia Rp 1.000.000", () => {
    expect(
      formatCurrency(1000000, { style: "currency", currency: "IDR" })
    ).toBe("Rp 1.000.000");
  });
  test("change number 1000000 with option to currency japan ￥ 1.000.000", () => {
    expect(
      formatCurrency(1000000, { style: "currency", currency: "JPY" }, "ja-JP")
    ).toBe("￥1,000,000");
  });
});

describe("Testing All Formatter Number Error", () => {
  test("Not expected return value currency", () => {
    expect(formatCurrency(1000000)).not.toBe("10.000.000");
  });
  test("Not expected return value locale", () => {
    expect(
      formatCurrency(1000000, { style: "currency", currency: "JPY" }, "ja-JP")
    ).not.toBe("Rp 1,000,000");
  });
});
