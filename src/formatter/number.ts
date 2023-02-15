import { ResolvedNumberFormatOptions } from "../types/common";

/**
 * formatCurrency
 * example:
 *
 * - `currencyFormatted(1000000) // 1.000.000`
 * - `currencyFormatted(1000000, { style : "currency", currency : "IDR" }) // Rp 1.000.000`
 * - `currencyFormatted(1000000,{ nominal: number, currency: 'JPY', minimumFractionDigits : 0 }, 'ja-JP') // ￥ 1.000.000`
 *
 */
export const formatCurrency = (
  nominal: number,
  options?: ResolvedNumberFormatOptions,
  locales: string | Array<string> = "id-ID"
) => {
  return new Intl.NumberFormat(locales, {
    ...options,
    minimumFractionDigits: options?.minimumFractionDigits || 0,
  }).format(nominal);
};
