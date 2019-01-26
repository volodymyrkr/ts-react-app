import {observer} from "mobx-react";
import * as React from 'react';
import CounterStore from "../counter.store";

@observer
export default class Counter extends React.Component <{ counterStore: CounterStore }> {
  public render() {
    return (
      <div>
        Counter: {this.props.counterStore.clickedCount}
      </div>
    )
  }
}