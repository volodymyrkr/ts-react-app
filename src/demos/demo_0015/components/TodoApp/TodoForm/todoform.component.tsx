import * as React from "react";
import {ITodosStoreProps} from "../../../stores/todos.store";

import {inject, observer} from "mobx-react";
import "./todoform.component.scss";

interface IState {
  newTaskTitle: string
}

interface IPropsFromParent {
  somefield?: string;
}

@inject("store")
@observer
export default class TodoFormComponent extends React.Component<ITodosStoreProps & IPropsFromParent, IState> {
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
    const store = this.props.store!;
    if (event.key === "Enter") {
      store.addTask(this.state.newTaskTitle);
      this.setState({
        newTaskTitle: ""
      })
    }
  };

  private changeTaskTitleHandler = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      newTaskTitle: event.currentTarget.value
    })
  }
}