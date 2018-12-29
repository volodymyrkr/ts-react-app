import {observable} from "mobx";
import {TodoStateType} from "../../types/TodoStateType";
import {Todo} from "../TodoItem/todo.store";



export default class TodoListStore {
  @observable public todos: Todo[] = [
    new Todo({id: 1, title: "Todo 1", state: TodoStateType.OPEN}),
    new Todo({id: 2, title: "Todo 2", state: TodoStateType.OPEN}),
    new Todo({id: 3, title: "Todo 3", state: TodoStateType.IN_PROGRESS}),
    new Todo({id: 4, title: "Todo 4", state: TodoStateType.DONE}),
    new Todo({id: 4, title: "Todo 4", state: TodoStateType.CLOSED}),
    new Todo({id: 4, title: "Todo 4", state: TodoStateType.CLOSED}),
    new Todo({id: 4, title: "Todo 4", state: TodoStateType.CLOSED}),
  ];
  @observable public filterSearchString: string = "";
  @observable public filterState: number = TodoStateType.NONE;
}