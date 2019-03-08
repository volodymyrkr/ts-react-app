import {Component} from "react";
import * as React from "react";
import {WithNamespaces, withNamespaces} from "react-i18next";
import {TicTacToeHeader} from "./common/TicTacToeHeader/index.component";

class TicTacToe extends Component<WithNamespaces> {
  public render() {
    const {t} = this.props;
    return (
      <div className="game-tictactoe">
        <TicTacToeHeader title={t("test_message.key")}/>
        {/*<TicTacToeGameArea/>*/}
        {/*<TicTacToeFooter/>*/}
      </div>
    )
  }
}

export default withNamespaces("translation")(TicTacToe);