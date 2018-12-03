import * as React from "react";
import CurrencyList from "./app/CurrencyList";
import {Header} from "./common/Header";

export default class ReactCoinApp extends React.Component {
  public render() {
    return (
      <div>
        <Header>Coins</Header>
        <CurrencyList/>
      </div>
    );
  }
}