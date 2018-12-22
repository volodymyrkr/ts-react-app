import * as React from "react";
import {CurrencyType} from "../../../types/CurrencyType";
import {currencyTypeToNameMapper} from "../../../utils/CurrencyMapper";
import Header from '../../common/Header';

interface ICurrencyListComponentProps {
  data: ReadonlyArray<CurrencyType>
}

const currencyListJSX = (data:ReadonlyArray<CurrencyType>) => {
  return (
    <div>
      <ul>
        {
          data
            .map(currencyTypeToNameMapper)
            .map((item, index)=><div key={index}>{item}</div>)
        }
      </ul>
    </div>
  )
};

export default class CurrencyListComponent extends React.Component<ICurrencyListComponentProps> {
  public render() {
    const { data } = this.props;
    return (
      <div>
        <Header>Currencies:</Header>
        {currencyListJSX(data)}
      </div>
    )
  }
}