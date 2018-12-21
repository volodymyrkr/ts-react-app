import * as React from "react";
import "./index.scss";

interface IProps {
  percentage?: number
}
interface IState {
  percentage: number
}
export default class Filler extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    const {percentage} = props;

    this.state = {
      percentage: percentage?percentage:0
    }
  }
  public componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
    const {percentage} = nextProps;

    this.state = {
      percentage: percentage?percentage:0
    }
  }

  public render() {
    const {percentage} = this.state;
    return (
      <div className="filler">
        <div className="filler-border"/>
        <div className="filler-status" style={{ width: `${percentage}%`}}/>
      </div>
    )
  }
}