import { describe, expect, test } from "@jest/globals";
import {
  formatSeconds,
  formatJsDate,
  formatJsDateToEpoch,
} from "../src/formatter/date";

describe("Testing All Formatter Date Success", () => {
  test("1355331599 to 2012-12-12", () => {
    expect(formatSeconds(1355331599, "y-LL-d")).toBe("2012-12-12");
  });

  test("new Date(2012, 11, 12) to be epoch 2012-12-12 ", () => {
    expect(formatJsDate(new Date(2012, 11, 12), "y-LL-d")).toBe("2012-12-12");
  });

  test("new Date(2012,11,12,23,59,59) to be epoch 1355245200 ", () => {
    expect(formatJsDateToEpoch(new Date(2012, 11, 12))).toBe(1355270400);
  });
});

describe("Testing All Formatter Number Error", () => {
  test("formatSeconds when result not valid", () => {
    expect(formatSeconds(1355331599, "y-LL-d")).not.toBe("2012-12-13");
  });

  test("formatJsDate when result not valid", () => {
    expect(formatJsDate(new Date(2012, 11, 13), "y-LL-d")).not.toBe(
      "2012-12-12"
    );
  });

  test("formatJsDateToEpoch when result not valid", () => {
    expect(formatJsDateToEpoch(new Date(2012, 11, 12))).not.toBe(1355245201);
  });
});
