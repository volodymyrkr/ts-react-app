import {observer} from "mobx-react";
import * as React from "react";
import {ITodoProps} from "../../../stores/todo.store";
import {mapTodoStateToClass} from "../../../types/TodoStateType";
import "./todo.component.scss";

@observer
export default class TodoComponent extends React.Component<ITodoProps> {
  constructor(props: Readonly<ITodoProps>) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <div className={`todoitem-container ${mapTodoStateToClass(this.props.store.state)}`}>
        {this.props.store.title}
      </div>
    )
  }
}