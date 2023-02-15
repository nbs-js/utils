import { stripHtml } from "string-strip-html";

/**
 * strLimit
 * example:
 *
 * - `strLimit('In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ', 20, '...')`
 *
 * - `// In publishing and gr ...`
 */
export const strLimit = (value: any, limit?: number, end?: string) => {
  let str = value.slice(0, limit || 10);
  if (value.length >= (limit || 10)) {
    str = str.concat(` ${end || "..."}`);
  }
  return str;
};

/**
 * htmlToString
 * example:
 *
 * `htmlToString('<p>nbs.co.id</p>') // nbs.co.id`
 *
 */
export const htmlToString = (html: string) => stripHtml(html).result;

/**
 * Format File Size
 * example:
 *
 * `replaceToNumber('ras1233#@!#!@') // 123`
 *
 */
export const replaceToNumber = (value: string) => value.replace(/[^\d]/g, "");

/**
 * Format File Size
 * example:
 *
 * `formatFileSize(2000000) // 2 MB`
 *
 * [View source](https://code.nbs.dev/...)
 */
export function formatFileSize(bytes: number) {
  if (bytes == 0) return "0 Bytes";

  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const typeIndex = Math.floor(Math.log(bytes) / Math.log(1000));

  return (
    parseFloat((bytes / Math.pow(1000, typeIndex)).toFixed(2)) +
    " " +
    sizes[typeIndex]
  );
}

/**
 * strLimit
 * example:
 *
 * `formatPhoneNumber(082211179358) // 0822-1117-9358`
 * `formatPhoneNumber(082211179358, ' ') // 0822 1117 9358`
 *
 */
export function formatPhoneNumber(
  phoneNumber: string | number,
  separator = "-"
) {
  let cleaned = `${phoneNumber}`.replace(/[^\d]/g, "");

  const match = cleaned
    .slice(0, 14)
    .match(/^(\d{0,4})(\d{0,4})(\d{0,5})(\d{0,5})$/);

  if (match) {
    cleaned = match
      .slice(1)
      .filter((i) => i !== "")
      .join(separator);
  }

  return cleaned;
}

/**
 * tailingSlash
 * example:
 *
 * `- tailingSlash('https://code.nbs.dev/') // https://code.nbs.dev`
 *
 */

export const tailingSlash = (url: string) => url.replace(/\/$/, "");
