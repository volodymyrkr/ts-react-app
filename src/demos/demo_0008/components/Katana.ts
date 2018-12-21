import {injectable} from "inversify";

export interface IKatana {
  hit():number;
}

@injectable()
export default class Katana implements IKatana {
  public hit(): number {
    return 0;
  }
}
