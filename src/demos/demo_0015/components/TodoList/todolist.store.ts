import {observable} from "mobx";
import {Todo} from "../TodoItem/todo.store";

export default class TodoListStore {
  @observable public todos: Todo[] = [
    new Todo({id: 1, title: "Todo 1", status: 0}),
    new Todo({id: 2, title: "Todo 2", status: 0}),
    new Todo({id: 3, title: "Todo 3", status: 1}),
    new Todo({id: 4, title: "Todo 4", status: 2}),
  ];
  @observable public filter: string = "asd";
}