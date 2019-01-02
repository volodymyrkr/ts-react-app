import {observable} from "mobx";

export default class DataStore {
  @observable
  public someData:string = "initial value"
}

export const dataStore = new DataStore();
dataStore.someData = "changed data"