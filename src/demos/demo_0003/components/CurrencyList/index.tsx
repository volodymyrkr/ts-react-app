import * as React from "react";
export enum CurrencyTypes {
  USD = "usd",
  EUR = "eur",
  HRN = "hrn"
}
export type CurrencyType =
  | CurrencyTypes.USD
  | CurrencyTypes.EUR
  | CurrencyTypes.HRN;

interface ICurrencyProps {
  name: string
}

interface ICurrencyListProps {
  values: ReadonlyArray<CurrencyType>
}

interface ICurrencyListState {
  values: ReadonlyArray<CurrencyType>
}

const CurrencyJSX = (props: ICurrencyProps) => {
  return (
    <div>{props.name}</div>
  )
};

export default class CurrencyList extends React.Component<ICurrencyListProps, ICurrencyListState> {
  public state = {
    values: generateDefaultList()
  };
  public render() {
    const {values} = this.state;
    return (
      <div>
        <header>Currencies:</header>
        <ul>
          {
            values.map((item, index) => {
              return (
                <li key={index}><CurrencyJSX name={item}/></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const generateDefaultList = ():ReadonlyArray<CurrencyType> => {
  return [
    CurrencyTypes.USD,
    CurrencyTypes.EUR,
    CurrencyTypes.HRN
  ];
};