import * as React from "react";

import {observer} from "mobx-react";
import Todo from "./todo.store";

interface IProps {
  store: Todo;
}

@observer
export default class TodoComponent extends React.Component<IProps> {
  constructor(props: Readonly<IProps>) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <div>
        Hello TodoComponent {this.props.store.title}
      </div>
    )
  }
}