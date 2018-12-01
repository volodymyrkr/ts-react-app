import * as React from "react";

interface IProps {
  name?: string;
}

interface IState {
  owner: string;
}

export default class DemoComponent extends React.Component<IProps, IState> {
  state = {
    owner: "Olena"
  };

  public render() {
    const {name} = this.props;
    const {owner} = this.state;
    return (
      <div>Hello, {name} from {owner}</div>
    );
  }
}

