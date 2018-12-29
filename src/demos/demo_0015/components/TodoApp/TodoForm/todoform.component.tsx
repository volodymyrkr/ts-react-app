import * as React from "react";
import {ITodosStoreProps} from "../../../stores/todos.store";

import "./todoform.component.scss";

export default class TodoFormComponent extends React.Component<ITodosStoreProps> {
  public render(): React.ReactNode {
    return (
      <div className="todoform-container">
        <span className="todoform-label">Input task title:</span>
        <input className="todoform-input" type="text" placeholder="task title"/>
      </div>
    );
  }
}