import * as React from "react";
import {CurrencyInfoType} from "../../types/CurrencyType";

interface ICurrencyListProps {
  someField?: boolean
}

interface ICurrencyListState {
  currencies: CurrencyInfoType[],
  error: null,
  loading: boolean
}

export default class CurrencyList extends React.Component<ICurrencyListProps, ICurrencyListState> {
  constructor(props:ICurrencyListProps) {
    super(props);

    this.state = {
      currencies: [],
      error: null,
      loading: false
    }
  }
  public componentDidMount(): void {
    fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
      .then((data) => {
        console.log('Success', data);
        this.setState({
          currencies: data.currencies
        });
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  public render() {
    const {loading, currencies} = this.state;
    return (
      <div>
        Curencies:
        {loading?"loading":"loaded"}
        {
          currencies.map((item, index) => {
            return (
              <li key={index}>{`${item.name} ${item.price} ${item.marketCap} ${item.percentChange24h}`}</li>
            )
          })
        }
      </div>
    )
  }
}