import {observer} from "mobx-react";
import * as React from "react";
import TodoStore from "../../../stores/todo.store";
import {ITodosStoreProps} from "../../../stores/todos.store";
import TodoComponent from "../TodoItem/todo.component";

import "./todolist.component.scss";

@observer
export default class TodoListComponent extends React.Component<ITodosStoreProps> {
  public render(): React.ReactNode {
    return (
      <div className="todolist-container">
        {
          this.props.store.todos
            .filter((item) => {
              return this.props.store.filterSearchString === ""
                || item.title.indexOf(this.props.store.filterSearchString) >= 0;
            })
            .map((item: TodoStore, index: number) => {
              return (
                <React.Fragment key={index}>
                  <TodoComponent store={item}/>
                </React.Fragment>
              )
            })
        }
      </div>
    );
  }
}