import * as React from "react";

import "./todoheader.component.scss";

export default class TodoHeaderComponent extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="todoheader-container">
        <span className="todoheader-label">
        {this.props.children}
        </span>
      </div>
    );
  }
}