import {Container} from "inversify";
import {Provider} from "inversify-react";
import * as React from "react";
import 'reflect-metadata';
import Clicker from "./component/Clicker";
import Counter from "./component/Counter";
import CounterStore from "./component/counter.store";

interface IDemoProps {
  someData: string
}

interface IDemoState {
  count: number
}

export class Demo0017 extends React.Component<IDemoProps, IDemoState> {
  private container: Container;
  private counterStore: CounterStore;

  constructor(props: IDemoProps) {
    super(props);
    this.container = new Container();
    this.container.bind<CounterStore>("CounterStore").to(CounterStore).inSingletonScope();
    this.counterStore = this.container.get("CounterStore");
    console.log(this.counterStore)
  }

  public render() {
    return (
      <Provider container={this.container}>
        <React.Fragment>
          {
            !!this.state && !!this.state.count && <div>Demo0017 is here {this.state.count}</div>
          }
          <Clicker processing={false}/>
          <Counter someField={"data"}/>
        </React.Fragment>
      </Provider>
    )
  }
}

export default Demo0017;