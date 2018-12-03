import {CurrencyName, CurrencyType} from "../types/CurrencyType";

export const currencyTypeToNameMapper = (currency:CurrencyType):CurrencyName => {
  switch(currency) {
    case CurrencyType.HRN:
      return "гривня";
    case CurrencyType.USD:
      return "us dollar";
    case CurrencyType.EUR:
      return "euro";
    default:
      return "unknown";
  }
}