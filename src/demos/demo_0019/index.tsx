import {Component} from "react";
import * as React from "react";
import SimpleComponent from "./component/SimpleComponent";
import {withBoldHoc} from "./hoc/WithBoldHoc";

class Demo0019 extends Component {
  public render() {
    return (
      <div>
        <SimpleComponent />
      </div>
    )
  }
}

export default withBoldHoc(Demo0019);