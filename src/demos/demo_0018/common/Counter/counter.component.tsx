import {resolve} from "inversify-react";
import {observer} from "mobx-react";
import * as React from "react";
import {CounterStore} from "./counter.store";

@observer
class Counter extends React.Component{
  @resolve("CounterStore") private readonly counterStore: CounterStore;

  public render() {
    return (
      <div>
        ClickCounter is here {this.counterStore.countedItems}
        <button onClick={this.onClick}>Clickme</button>
      </div>
    )
  }
  private onClick = () => {
    console.log("CLICKED");
    this.counterStore.countedItems++;
  };
}

export default Counter;