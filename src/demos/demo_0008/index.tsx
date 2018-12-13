import * as React from "react";
import DataInput from "./components/DataInput";
import StatusBar from "./components/StatusBar";
import {dataStore} from "./stores/data.store";

export default class Demo0008 extends React.Component {
  public render() {
    return (
      <div>
        <div>Demo_0008 is created</div>
        <DataInput dataStore={dataStore}/>
        <StatusBar dataStore={dataStore}/>
      </div>
    )
  }
}