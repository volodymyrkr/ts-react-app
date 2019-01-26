import {action, observable} from "mobx";

export default class CounterStore {
  @observable public clickedCount = 11;

  @action
  public increment() {
    this.clickedCount++;
  }
}