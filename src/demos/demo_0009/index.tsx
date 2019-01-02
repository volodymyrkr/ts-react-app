import * as React from "react";
import "reflect-metadata";

import DataComponent from "./component";

export default class Demo0009 extends React.Component {
  public render() {
    return (
      <div>
        <div>Demo-0009 hello</div>
        <DataComponent/>
      </div>
    )
  }
}