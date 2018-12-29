import * as React from "react";

import {observer} from "mobx-react";
import {mapTodoStateToClass} from "../../types/TodoStateType";
import {ITodo} from "./todo.store";

import "./todo.scss";

interface IProps {
  store: ITodo;
}

@observer
export default class TodoComponent extends React.Component<IProps> {
  constructor(props: Readonly<IProps>) {
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