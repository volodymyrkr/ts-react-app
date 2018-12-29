import * as React from "react";
import {ITodosStoreProps} from "../../../stores/todos.store";

import "./todofilter.component.scss";

export default class TodoFilterComponent extends React.Component<ITodosStoreProps> {
  public render(): React.ReactNode {
    return (
      <div className="todofilter-container">
        <span className="todofilter-label">Filter:</span>
        <input className="todofilter-input" type="text" placeholder="input todo" onChange={this.changeFilterHandler}/>
      </div>
    );
  }
  private changeFilterHandler = (event:React.FormEvent<HTMLInputElement>) => {
    this.props.store.filterSearchString = event.currentTarget.value;
  }
}