import { DateTime } from "luxon";
/**
 * formatSeconds
 * example:
 *
 * - `formatSeconds(135533159, 'y-LL-d') // 2012-12-12`<br>
 * [Check Formatter Table]{@link https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens}
 */
export const formatSeconds = (seconds: number, format: string) =>
  DateTime.fromSeconds(seconds).toFormat(format);

/**
 * formatJsDate
 * example:
 *
 * - `formatJsDate(new Date(2012,11,12), 'y-LL-d') // 2012-12-12`<br>
 * [Check Formatter Table]{@link https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens}
 */
export const formatJsDate = (date: Date, format: string) =>
  DateTime.fromJSDate(date).toFormat(format);

/**
 * formatCurrency
 * example:
 *
 * - `formatJsDateToEpoch(new Date(2012,11,12,23,59,59)) // 135533159
 *
 */
export const formatJsDateToEpoch = (date: Date) =>
  DateTime.fromJSDate(date).toSeconds();
