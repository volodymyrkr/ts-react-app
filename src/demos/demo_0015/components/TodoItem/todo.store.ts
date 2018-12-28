import {observable} from "mobx";

export interface ITodo {
  id:number,
  title: string,
  status: number,
}

export class Todo implements ITodo{
  @observable public id:number=Math.random()*100000;
  @observable public title: string = "";
  @observable public status: number = 0;

  constructor(value: ITodo) {
    this.id = value.id;
    this.status = value.status;
    this.title = value.title;
  }
}