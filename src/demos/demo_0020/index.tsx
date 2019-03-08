import i18next from "i18next";
import {Component} from "react";
import * as React from "react";
import {I18nextProvider} from "react-i18next";
import TicTacToe from "./games/tictactoe";

export interface IProps {
  match: {
    params: {
      lang: string
    }
  }
}
class Demo0020 extends Component<IProps> {
  public componentWillMount(): void {
    const {lang} = this.props.match.params;
    i18next.init({
      lng: lang,
      resources: require(`./dict/${lang}.json`)
    })
  }

  public render() {
    return (
      <I18nextProvider i18n={i18next}>
        <TicTacToe/>
      </I18nextProvider>
    )
  }
}

export default Demo0020;