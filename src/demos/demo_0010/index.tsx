import * as React from "react";
import ProgressBar from "./components/common/ProgressBar";

interface IProps {
  currentValue: number,
  step: number,
  visible: boolean
}
interface IState {
  completeValue: number,
  currentValue: number,
  initialValue: number,
  step: number,
}
export default class Demo0010 extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      completeValue: 100,
      currentValue: 0,
      initialValue: 0,
      step: 5,
    }
  }

  public render(): React.ReactNode {
    const {initialValue, completeValue, currentValue} = this.state;
    return (
      <div className="demo-container">
        <span>Hello from me and my</span>
        <ProgressBar initialValue={initialValue} completeValue={completeValue} currentValue={currentValue}/>
        <button className="nextStep" onClick={this.clickNextStep}>CLICK ME</button>
      </div>
    )
  }

  public clickNextStep = (event:React.MouseEvent<HTMLButtonElement>) => {
    console.log("CLICKED", this);
    this.setState((state) => ({
      currentValue: state.currentValue+state.step,
    }));
  }
}