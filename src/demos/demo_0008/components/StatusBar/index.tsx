import {observer} from "mobx-react";
import * as React from "react";
import DataStore from "../../stores/data.store";

interface IProps {
  dataStore: DataStore;
}

@observer
export default class StatusBar extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <div>Status Bar {this.props.dataStore.someData}</div>
      </div>
    )
  }
}