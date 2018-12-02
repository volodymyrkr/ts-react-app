import * as React from "react";
type CurrencyType = "USD" | "EUR" | "HRV";

interface ICurrencyProps {
  name: CurrencyType
}
const CurrencyJSX = (props: ICurrencyProps) => {
  return (
    <div>{props.name}</div>
  )
}

export default class CurrencyList extends React.Component {
  public render() {
    return (
      <div>
        <header>Currencies:</header>
        <ul>
          <li><CurrencyJSX name="USD"/></li>
          <li><CurrencyJSX name="EUR"/></li>
          <li><CurrencyJSX name="HRV"/></li>
        </ul>
      </div>
    )
  }
}