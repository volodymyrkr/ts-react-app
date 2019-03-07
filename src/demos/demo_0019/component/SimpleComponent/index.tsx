import {Component} from "react";
import * as React from "react";
import {withBoldHoc} from "../../hoc/WithBoldHoc";

class SimpleComponent extends Component {
  public render() {
    return (
      <div>
        SimpleComponent
      </div>
    )
  }
}

export default withBoldHoc(SimpleComponent);