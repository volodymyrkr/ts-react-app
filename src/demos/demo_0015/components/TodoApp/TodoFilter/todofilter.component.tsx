import * as React from "react";
import {ITodosStoreProps} from "../../../stores/todos.store";

import {inject, observer} from "mobx-react";
import "./todofilter.component.scss";

@inject("store")
@observer
export default class TodoFilterComponent extends React.Component<ITodosStoreProps> {
  constructor(props: Readonly<ITodosStoreProps>) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <div className="todofilter-container">
        <span className="todofilter-label">Filter:</span>
        <input className="todofilter-input" type="text" placeholder="input todo" onChange={this.changeFilterHandler}/>
      </div>
    );
  }

  private changeFilterHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const {store} = this.props;
    store!.filterSearchString = event.currentTarget.value;
  }
}