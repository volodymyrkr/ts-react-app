import * as React from "react";
import TodoFilterComponent from "./components/TodoApp/TodoFilter/todofilter.component";
import TodoFormComponent from "./components/TodoApp/TodoForm/todoform.component";
import TodoHeaderComponent from "./components/TodoApp/TodoHeader/todoheader.component";
import TodoListComponent from "./components/TodoApp/TodoList/todolist.component";
import TodosStore from "./stores/todos.store";

import "./styles/app.scss";

export default class Demo0015 extends React.Component {
  private store = new TodosStore();

  constructor(props: Readonly<{}>) {
    super(props);
    setTimeout(() => {
      console.log("Hello");
    }, 5000);
  }

  public render() {
    return (
      <div className="todoapp-container">
        <TodoHeaderComponent>
          Hello from Demo_0015
        </TodoHeaderComponent>
        <div className="todobody-container">
          <TodoFormComponent store={this.store}/>
          <TodoListComponent store={this.store}/>
          <TodoFilterComponent store={this.store}/>
        </div>
      </div>
    );
  }
}