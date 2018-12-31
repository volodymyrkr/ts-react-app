import * as React from "react";
import {ITodosStoreProps} from "../../../stores/todos.store";

import "./todoform.component.scss";

interface IState {
  newTaskTitle: string
}
export default class TodoFormComponent extends React.Component<ITodosStoreProps, IState> {
  constructor(props: Readonly<ITodosStoreProps>) {
    super(props);
    this.state = {
      newTaskTitle: ""
    }
  }

  public render(): React.ReactNode {
    return (
      <div className="todoform-container">
        <span className="todoform-label">Input task title:</span>
        <input className="todoform-input" type="text" placeholder="task title"
               value={this.state.newTaskTitle}
               onKeyPress={this.keypressTaskTitleHandler}
               onChange={this.changeTaskTitleHandler}/>
      </div>
    );
  }

  private keypressTaskTitleHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key==="Enter") {
      this.props.store.addTask(this.state.newTaskTitle);
      this.setState({
        newTaskTitle: ""
      })
    }
  };

  private changeTaskTitleHandler = (event:React.FormEvent<HTMLInputElement>) => {
    this.setState({
      newTaskTitle: event.currentTarget.value
    })
  }
}