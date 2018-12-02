export enum Currency {
  USD=1001,
  EUR=1002,
  HRN=1023
}

export const currencyTypeAll: ReadonlyArray<Currency> = [
  Currency.USD,
  Currency.EUR,
  Currency.HRN
];

export type CurrencyType =
  Currency.USD
  | Currency.EUR
  | Currency.HRN;

export interface ICurrencyInfo {
  id: Currency,
  name: string
}
export type CurrencyNameType = string | undefined;