export type CurrencyName = string;

export enum CurrencyType {
  HRN,
  USD,
  EUR
}

export const allCurencyTypes: ReadonlyArray<CurrencyType> = [
  CurrencyType.HRN,
  CurrencyType.USD,
  CurrencyType.EUR
];

export const isSystemCurrency = (currency:CurrencyType) => allCurencyTypes.indexOf(currency)>=0;