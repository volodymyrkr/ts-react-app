import {inject, observer} from "mobx-react";
import * as React from "react";
import {ITodosStoreProps} from "../../../stores/todos.store";

import TodoStore from "../../../stores/todo.store";
import TodoComponent from "../TodoItem/todo.component";
import "./todolist.component.scss";


@inject("store")
@observer
export default class TodoListComponent extends React.Component<ITodosStoreProps> {
  constructor(props: Readonly<ITodosStoreProps>) {
    super(props);
  }

  public render(): React.ReactNode {
    const store = this.props.store;
    return <div className="todolist-container">
      {
        store!.todos
          .filter((item) => {
            return store!.filterSearchString === ""
              || item.title.indexOf(store!.filterSearchString) >= 0;
          })
          .map((item: TodoStore, index: number) => {
            return (
              <React.Fragment key={index}>
                <TodoComponent store={item}/>
              </React.Fragment>
            )
          })
      }
    </div>;
  }
}