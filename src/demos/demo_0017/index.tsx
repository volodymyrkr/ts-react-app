import * as React from "react";
import Clicker from "./component/Clicker";
import Counter from "./component/Counter";
import CounterStore from "./component/counter.store";

interface IDemoProps { someData: string }

interface IDemoState { count: number }

export class Demo0017 extends React.Component<IDemoProps, IDemoState> {
  private counterStore: CounterStore;
  constructor(props: IDemoProps) {
    super(props);
    this.counterStore = new CounterStore();
  }

  public render() {
    return (
      <React.Fragment>
        {
          !!this.state && !!this.state.count && <div>Demo0017 is here {this.state.count}</div>
        }
        <Clicker counterStore={this.counterStore} processing={false}/>
        <Counter counterStore={this.counterStore}/>
      </React.Fragment>
    )
  }
}

export default Demo0017;