import * as React from "react";
import {CurrencyType} from "../../types/CurrencyTypes";

interface ICurrencyProps {
  id: CurrencyType
}

export default class Currency extends React.Component<ICurrencyProps> {
  public render() {
    const {id} = this.props;
    return (
      <div>Currency: {id}</div>
    )
  }
}