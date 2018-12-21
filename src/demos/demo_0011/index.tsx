import i18next from "i18next";
import * as React from "react";
import {I18nextProvider} from "react-i18next";
import DragonTigerToe from "./games/dragontigertoe";

export default class Demo0011 extends React.Component {
  public componentWillMount() {
    this.setLanguage('ru');
    setTimeout(()=>this.setLanguage("en"), 5000);
  }

  public setLanguage(language: string | undefined) {
    i18next.init({
      lng: language,
      resources: require(`../../config/dictionary/${language}.json`)
    });
  }

  public render(): React.ReactNode {
    return (
      <I18nextProvider i18n={i18next}>
        <div className="game-container">
          <DragonTigerToe/>
        </div>
      </I18nextProvider>
    )
  }
}