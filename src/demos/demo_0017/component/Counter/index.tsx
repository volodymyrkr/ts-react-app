import  {resolve} from "inversify-react";
import {observer} from "mobx-react";
import * as React from 'react';
import CounterStore from "../counter.store";

interface ICounterProps {
  someField: string
}

@observer
export default class Counter extends React.Component<ICounterProps> {
  @resolve("CounterStore") private readonly counterStore:CounterStore;

  public render() {
    return (
      <div>
        Counter: {this.counterStore && this.counterStore.clickedCount}
      </div>
    )
  }
}