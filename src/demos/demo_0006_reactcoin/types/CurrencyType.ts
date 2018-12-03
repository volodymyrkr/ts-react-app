export enum CurrencyType {
  HRN,
  USD,
  EUR
}

export const currencyTypes:ReadonlyArray<CurrencyType> = [
  CurrencyType.HRN, CurrencyType.USD, CurrencyType.EUR
];

export const isCurrencyType = (type:CurrencyType):boolean => {
  return currencyTypes.indexOf(type)>=-1;
};

export interface CurrencyInfoType {
  id: string,
  marketCap: string,
  name: string,
  percentChange24h: number,
  price: number,
  rank: number
}