import {SFC} from "react";
import * as React from "react";

interface ITicTacToeHeaderProps {
  title: string,
}

export const TicTacToeHeader: SFC<ITicTacToeHeaderProps> = (props: ITicTacToeHeaderProps) => {
  return (
    <div>
      <div>{props.title}</div>
    </div>
  )
}