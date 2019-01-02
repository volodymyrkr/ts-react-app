import * as React from "react";
import {inject} from "inversify";

export default class DataComponent extends React.Component {
  constructor(@inject('DataService') privat dataService) {

  }

  public render() {
    return (
      <div>Data Component</div>
    )
  }
}