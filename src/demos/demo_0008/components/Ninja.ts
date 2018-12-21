interface INinja {
  action1():number;
  action2():number;
}

class Ninja implements INinja {
  public action1(): number {
    return 0;
  }

  public action2(): number {
    return 0;
  }
}
