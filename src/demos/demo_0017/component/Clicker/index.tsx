import * as React from "react";

export interface IClickerProps {
  processing: boolean,
  onClick(): void,
}

export const Clicker: React.FunctionComponent<IClickerProps> = (props: IClickerProps) => (
  <div>
    <input type="button" value="Clicke Me" onClick={props.onClick}/>
  </div>
);