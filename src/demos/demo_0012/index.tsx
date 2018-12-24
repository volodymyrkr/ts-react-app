import * as React from "react";
import * as request from "superagent";

interface IProps {
  someField?: string
}
interface IState {
  beers: []
}

interface IBeer {
  name: string,
  image_url: string
}
export default class Demo00012 extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      beers: []
    }
  }

  public componentWillMount(): void {
    const url = "http://api.punkapi.com/v2/beers?page=1&per_page=5";
    request.get(url).then((response: any ) => {
      this.setState({
        beers: response.body
      });
      console.log(response.body[0])
    })
  }

  public render(): React.ReactNode {
    return (
      <div>
        <ul>
        {
          this.state.beers.map((item:IBeer, index) => {
            return (
              <li key={index}>
                <span>{item.name}</span>
                <img src={item.image_url}/>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}