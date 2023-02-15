import { describe, expect, test } from "@jest/globals";
import { formatJsDate, formatJsDateToEpoch } from "../src/formatter/date";

describe("Testing All Formatter Date Success", () => {
  test("new Date(2012,11,12) to 2012-12-12", () => {
    expect(formatJsDate(new Date(2012, 11, 12), "y-LL-d")).toBe("2012-12-12");
  });

  test("new Date(2012,11,12,23,59,59) to be epoch 1355331599 ", () => {
    expect(formatJsDateToEpoch(new Date(2012, 11, 12, 23, 59, 59))).toBe(
      formatJsDateToEpoch(new Date(2012, 11, 12, 23, 59, 59))
    );
  });
});

describe("Testing All Formatter Date Error", () => {
  test("new Date(2012,11,12) to 2013-12-12", () => {
    expect(formatJsDate(new Date(2012, 12, 12), "y-LL-d")).not.toBe(
      "2012-12-12"
    );
  });

  test("new Date(2012,11,12,23,59,59) to be epoch 135533159 ", () => {
    expect(formatJsDateToEpoch(new Date(2012, 11, 12, 23, 59, 1))).not.toBe(
      1355331599
    );
  });
});
