import {resolve} from "inversify-react";
import {observer} from "mobx-react";
import * as React from "react";
import Counter from "../Counter";
import CounterStore from "../counter.store";

export interface IClickerProps {
  processing: boolean,
}

@observer
export default class Clicker extends React.Component<IClickerProps> {
  @resolve("CounterStore") public readonly counterStore: CounterStore;

  public render() {
    return (
      <div>
        <Counter someField={"Hello"}/>
        <div>Inner counter from Mobx </div>
        <input type="button" value="Clicke Me" onClick={this.clickHandler}/>
      </div>
    )
  }
  private clickHandler = () => {
    this.counterStore.increment();
    console.log(this.counterStore.clickedCount);
  };
}