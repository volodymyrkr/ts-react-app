import {Currency, CurrencyType, ICurrencyInfo} from "../types/CurrencyTypes";

export const currencyIdToNameMapper = (id: CurrencyType):ICurrencyInfo => {
  switch(id) {
    case Currency.USD:
      return {id, name: "usd"};
    case Currency.EUR:
      return {id, name: "eur"};
    case Currency.HRN:
      return {id, name: "hrn"};
    default:
      return {id, name: "unknown"};
  }
};