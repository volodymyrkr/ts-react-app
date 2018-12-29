import {observable} from "mobx";
import {ITodoType} from "../types/TodoType";

export interface ITodoProps {
  store: TodoStore;
}

export default class TodoStore implements ITodoType{
  @observable public id:number=Math.random()*100000;
  @observable public title: string = "";
  @observable public state: number = 0;

  constructor(value: ITodoType) {
    this.id = value.id;
    this.state = value.state;
    this.title = value.title;
  }
}