import * as React from "react";

interface IProps {
  name?: string;
}

export default class DemoComponent extends React.Component<IProps> {
  public render() {
    const {name} = this.props;
    return (
      <div>Hello, {name}</div>
    );
  }
}

