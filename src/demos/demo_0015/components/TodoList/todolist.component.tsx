import {observer} from "mobx-react";
import * as React from "react";
import TodoComponent from "../TodoItem/todo.component";
import {Todo} from "../TodoItem/todo.store";
import TodoListStore from "./todolist.store";

interface IProps {
  store: TodoListStore
}

@observer
export default class TodoListComponent extends React.Component<IProps> {
  public render(): React.ReactNode {
    return (
      <div className="todolist-container">
        <h2>ToDo List:</h2>
        <input type="text" placeholder="input todo" onChange={this.changeFilterHandler}/>
        {
          this.props.store.todos
            .filter((item) => {
              return this.props.store.filterSearchString === ""
                || item.title.indexOf(this.props.store.filterSearchString)>=0;
            })
            .map((item: Todo, index: any) => {
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

  private changeFilterHandler = (event:React.FormEvent<HTMLInputElement>) => {
    this.props.store.filterSearchString = event.currentTarget.value;
  };
}