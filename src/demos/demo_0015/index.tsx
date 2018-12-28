import {Provider} from "mobx-react";
import * as React from "react";
import TodoComponent from "./components/TodoItem/todo.component";
import Todo from "./components/TodoItem/todo.store";

export default class Demo0015 extends React.Component {
  private store = new Todo({id:1,title:"Hello",status:0});
  constructor(props: Readonly<{}>) {
    super(props);
    setTimeout(()=>{
      this.store.title = "Updated Hello";
    }, 5000);
  }
  public render() {
    return (
      <div>
        <div>
          Hello from Demo_0015
        </div>
        <Provider >
          <TodoComponent store={this.store}/>
        </Provider>
      </div>
    );
  }
}