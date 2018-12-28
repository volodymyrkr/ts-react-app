import * as React from "react";
import TodoListComponent from "./components/TodoList/todolist.component";
import TodolistStore from "./components/TodoList/todolist.store";

export default class Demo0015 extends React.Component {
  private store = new TodolistStore();
  constructor(props: Readonly<{}>) {
    super(props);
    setTimeout(()=>{
      console.log("Hello");
      this.store.todos[1].title = "asd";
    }, 5000);
  }
  public render() {
    return (
      <div>
        <div>
          Hello from Demo_0015
        </div>
        <TodoListComponent store={this.store}/>
      </div>
    );
  }
}