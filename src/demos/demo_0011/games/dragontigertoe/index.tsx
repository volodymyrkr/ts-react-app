import * as React from "react";
import {withNamespaces, WithNamespaces} from "react-i18next";
import GameHeader from "../common/components/GameHeader";

interface IProps extends WithNamespaces{
  someField?:string
}

class DragonTigerToe extends React.Component<IProps, WithNamespaces> {
  public render(): React.ReactNode {
    return (
      <div>
        <GameHeader>{this.props.t("test_message.key")}</GameHeader>
      </div>
    );
  }
}

export default withNamespaces("translation")(DragonTigerToe)