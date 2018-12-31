import {observable} from "mobx";
import {TodoStateType} from "../types/TodoStateType";
import TodoStore from "./todo.store";

export interface ITodosStoreProps {
  store: TodosStore
}

export default class TodosStore {
  @observable public todos: TodoStore[] = [
    new TodoStore({id: 1, title: "Todo 1", state: TodoStateType.OPEN}),
    new TodoStore({id: 2, title: "Todo 2", state: TodoStateType.OPEN}),
    new TodoStore({id: 3, title: "Todo 3", state: TodoStateType.IN_PROGRESS}),
    new TodoStore({id: 4, title: "Todo 4", state: TodoStateType.DONE}),
    new TodoStore({id: 5, title: "Todo 4", state: TodoStateType.CLOSED}),
    new TodoStore({id: 6, title: "Todo 4", state: TodoStateType.CLOSED}),
    new TodoStore({id: 7, title: "Todo 4", state: TodoStateType.CLOSED}),
  ];
  @observable public filterSearchString: string = "";
  @observable public filterState: number = TodoStateType.NONE;

  public addTask = (newTaskTitle: string) => {
    setTimeout(() => {
      this.todos.push({id: 1, title: newTaskTitle, state: TodoStateType.OPEN})
    }, 1000);
  }
}