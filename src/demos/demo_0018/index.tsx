import {Container} from "inversify";
import {Provider} from "inversify-react";
import * as React from "react";
import Counter from "./common/Counter/counter.component";
import {CounterStore} from "./common/Counter/counter.store";

export default class Demo0018 extends React.Component<{}, {}> {
  private container:Container;

  constructor(props: {}) {
    super(props);
    this.container = new Container();
    this.container.bind("CounterStore").to(CounterStore);
  }

  public render() {
    return (
      <Provider container={this.container}>
        <div>
          <Counter/>
        </div>
      </Provider>
    )
  }
}