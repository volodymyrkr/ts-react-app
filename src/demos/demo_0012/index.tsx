import * as React from "react";
import * as request from "superagent";
import BeerList from "./components/BeerList";

interface IProps {
  someField?: string
}

interface IState {
  beers: []
}

export default class Demo00012 extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      beers: []
    }
  }

  public componentWillMount(): void {
    const url = "http://api.punkapi.com/v2/beers?page=1&per_page=50";
    request.get(url).then((response: any) => {
      this.setState({
        beers: response.body
      });
      console.log(response.body[0])
    })
  }

  public render(): React.ReactNode {
    return (
      <BeerList beers={this.state.beers}/>
    )
  }
}