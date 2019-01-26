import {observer} from "mobx-react";
import * as React from "react";
import CounterStore from "../counter.store";

export interface IClickerProps {
  counterStore: CounterStore,
  processing: boolean,
}

@observer
export default class Clicker extends React.Component<IClickerProps> {
  constructor(props: IClickerProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <div>Inner counter from Mobx {this.props.counterStore.clickedCount}</div>
        <input type="button" value="Clicke Me" onClick={this.clickHandler}/>
      </div>
    )
  }
  private clickHandler = () => (this.props.counterStore.increment());
}