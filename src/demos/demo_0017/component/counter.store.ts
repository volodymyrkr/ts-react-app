import {injectable} from "inversify";
import {action, observable} from "mobx";

@injectable()
export default class CounterStore {
  @observable public clickedCount = 11;

  @action
  public increment() {
    this.clickedCount++;
  }
}