import {Component, Fragment} from "react";
import * as React from 'react';
import {currencyTypeAll} from "../../types/CurrencyTypes";
import {currencyIdToNameMapper} from "../../utils/CurrencyMapper";

interface ICurrenciesPageProps {
  showAll?: boolean
}

export default class CurrenciesPage extends Component<ICurrenciesPageProps> {
  public render() {
    return (
      <Fragment>
        <div>
          All currencies:
        </div>
        <div>
          <ul>
          {
            currencyTypeAll
              .map(currencyIdToNameMapper)
              .map((item, index) => <li key={index}>{item.name}</li>)
          }
          </ul>
        </div>
      </Fragment>
    );
  }
}