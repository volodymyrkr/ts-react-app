import * as React from "react";
import {CurrencyInfoType} from "../../types/CurrencyType";
import {handleResponse} from "../../helpers/connection/ConnectionHandler";
import {API_URL} from "../../helpers/connection/Config";

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
    this.setState({
      loading: true
    });

    fetch(`${API_URL}cryptocurrencies?page=1&perPage=20`)
      .then(handleResponse)
      .then((data) => {
        console.log('Success', data);
        this.setState({
          currencies: data.currencies,
          loading: false
        });
      })
      .catch((error) => {
        console.log('Error', error);
        this.setState({
          error: error.errorMessage,
          loading: false
        })
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