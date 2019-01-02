import {injectable} from "inversify";

@injectable()
export class DataService {
  private someField: string = "initial value";

  public getComeField(): string {
    return this.someField;
  }
}