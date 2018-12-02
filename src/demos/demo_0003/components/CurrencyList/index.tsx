import * as React from "react";
export type CurrencyType = "USD" | "EUR" | "HRV";

interface ICurrencyProps {
  name: CurrencyType
}

interface ICurrencyListProps {
  values: ReadonlyArray<CurrencyType>
}

const CurrencyJSX = (props: ICurrencyProps) => {
  return (
    <div>{props.name}</div>
  )
}

export default class CurrencyList extends React.Component<ICurrencyListProps> {
  public render() {
    const {values} = this.props;
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