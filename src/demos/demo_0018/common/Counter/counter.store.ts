import {injectable} from "inversify";
import {observable} from "mobx";

@injectable()
export class CounterStore {
  @observable public countedItems: number = 1;
}