import * as React from "react";

import {observer} from "mobx-react";
import {ITodo} from "./todo.store";

interface IProps {
  store: ITodo;
}

@observer
export default class TodoComponent extends React.Component<IProps> {
  constructor(props: Readonly<IProps>) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <div>
        {this.props.store.title}
      </div>
    )
  }
}