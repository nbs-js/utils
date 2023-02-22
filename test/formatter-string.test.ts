import { describe, expect, test } from "@jest/globals";
import {
  tailingSlash,
  replaceToNumber,
  formatPhoneNumber,
  strLimit,
  htmlToString,
  formatFileSize,
} from "../src/formatter/string";

describe("Testing All Formatter String", () => {
  test("remove slash at the last on string", () => {
    expect(tailingSlash("https://code.nbs.dev/")).toBe("https://code.nbs.dev");
  });
  test("replace not number", () => {
    expect(replaceToNumber("ras1233#@!#!@")).toBe("1233");
  });
  test("format phone number", () => {
    expect(formatPhoneNumber("082211179358")).toBe("0822-1117-9358");
  });
  test("format phone number with different separator", () => {
    expect(formatPhoneNumber("082211179358", " ")).toBe("0822 1117 9358");
  });
  test('In publish end word "..."', () => {
    expect(strLimit("In publishing and graphic design")).toBe("In publish ...");
  });
  test('In publishing and gr "view more"', () => {
    expect(strLimit("In publishing and graphic design", 20, "view more")).toBe(
      "In publishing and gr view more"
    );
  });
  test("html to string", () => {
    expect(htmlToString("<p>nbs.co.id</p>")).toBe("nbs.co.id");
  });
  test("format file size 0 to 0 Bytes", () => {
    expect(formatFileSize(0)).toBe("0 Bytes");
  });
  test("format file size 2000000 to 2 MB", () => {
    expect(formatFileSize(2000000)).toBe("2 MB");
  });
});

describe("Testing All Formatter String Error", () => {
  test("remove slash at the last on string", () => {
    expect(tailingSlash("https://code.nbs.dev/")).not.toBe(
      "https://code.nbs.dev/"
    );
  });
  test("replace not number", () => {
    expect(replaceToNumber("ras1233#@!#!@")).not.toBe("ras1233#@!#!@");
  });
  test("format phone number", () => {
    expect(formatPhoneNumber("082211179358")).not.toBe("08221117-9358");
  });
  test("format phone number with different separator", () => {
    expect(formatPhoneNumber("082211179358", " ")).not.toBe("0822 11179358");
  });
  test('limit string with end word "..."', () => {
    expect(
      strLimit(
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
        20,
        "..."
      )
    ).not.toBe("In publishing and...");
  });
  test("html to string", () => {
    expect(htmlToString("<p>nbs.co.id</p>")).not.toBe("<p>nbs.co.id</p>");
  });
  test("format file size 2000000 to 2 MB", () => {
    expect(formatFileSize(2000000)).not.toBe("2 kb");
  });
});
