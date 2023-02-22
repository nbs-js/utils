/**
 * isObjEmpty
 * example:
 *
 * - `isObjEmpty({}) // true`
 *
 * - `isObjEmpty({ xid: 1}) // false`
 *
 */
export const isObjEmpty = (obj: {} | Record<string, never>) =>
  Object.keys(obj).length === 0;
