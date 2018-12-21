import * as React from "react";

export default class GameHeader extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="game-header">
        {this.props.children}
      </div>
    )
  }
}