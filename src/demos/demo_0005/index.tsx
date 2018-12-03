import * as React from "react";
import Header from "./components/common/Header";
import CurrencyListComponent from "./components/currency/CurrencyList/currencyList.component";
import {CurrencyType} from "./types/CurrencyType";

export default class Demo0005 extends React.Component {
  public render() {
    return (
      <div>
        <Header>Hello! It's a demo project</Header>
        <CurrencyListComponent data={[
          CurrencyType.HRN,
          CurrencyType.USD,
          CurrencyType.EUR
        ]}/>
      </div>
    )
  }
}