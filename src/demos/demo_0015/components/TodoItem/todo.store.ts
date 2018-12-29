import {observable} from "mobx";

export interface ITodo {
  id:number,
  title: string,
  state: number,
}

export class Todo implements ITodo{
  @observable public id:number=Math.random()*100000;
  @observable public title: string = "";
  @observable public state: number = 0;

  constructor(value: ITodo) {
    this.id = value.id;
    this.state = value.state;
    this.title = value.title;
  }
}