import * as React from "react";
import Filler from "../Filler";

import "./index.scss";

interface IProps {
  initialValue?: number,
  completeValue?: number,
  step?: number,
  currentValue?: number,
}

interface IState extends IProps{
  currentValue: number,
  visible: boolean,
}

export default class ProgressBar extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);

    this.state = {
      currentValue: props.currentValue && props.currentValue?props.currentValue:0,
      visible: true
    }
  }

  public componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
    let {currentValue} = nextProps;
    currentValue = currentValue?(currentValue>100?100:currentValue):0;
    if (this.state.currentValue !== currentValue) {
      this.setState({
        currentValue
      });
    }
  }

  public render(): React.ReactNode {
    const {currentValue} = this.state;
    return (
      <div className="progressbar">
        <div className="progressbar_label">ProgressBar {currentValue}</div>
        <Filler percentage={currentValue && currentValue>100?100:currentValue}/>
      </div>

    )
  }
}