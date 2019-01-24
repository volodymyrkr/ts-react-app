import * as React from "react";
import {Clicker} from './component/Clicker';
import {Counter} from "./component/Counter";

interface IDemoProps { someData: string }

interface IDemoState { count: number }

export class Demo0017 extends React.Component<IDemoProps, IDemoState> {
  constructor(props: IDemoProps) {
    super(props);
    this.state = {
      count: 0
    }
  }

  public increaseCounter(value?: number) {
    this.setState({
      count: this.state.count + (value ? value : 1)
    });
  }

  public render() {
    return (
      <React.Fragment>
        {
          !!this.state && !!this.state.count && <div>Demo0017 is here {this.state.count}</div>
        }
        <Clicker processing={false} onClick={this.clickHandler}/>
        <Counter value={this.state.count}/>
      </React.Fragment>
    )
  }

  private clickHandler = () => {
    console.log('CLICK');
    this.increaseCounter();
  };
}

export default Demo0017;