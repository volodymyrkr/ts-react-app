import * as React from "react";
import {fromEvent, merge} from "rxjs";

interface IProps {
  someField?: string,
}

interface IState {
  logAction: string,
  logId: number,
}
export default class Demo0007 extends React.Component<IProps, IState> {
  constructor(props:IProps) {
    super(props);
    this.state = {
      logAction: "",
      logId: 0,
    };
    fromEvent(window, 'blur')
      .subscribe( (event) => console.log('WINDOW blur', event));
    fromEvent(window, 'focus')
      .subscribe( (event) => console.log('WINDOW focus', event));
    fromEvent(document, 'visibilitychange')
      .subscribe( (event) => console.log('DOCUMENT visibilitychange', event, document.hidden));

    merge(
      fromEvent(window, 'blur'),
      fromEvent(window, 'focus'),
      fromEvent(document, 'visibilitychange')
    ).subscribe(() => console.log(`visible: ${!document.hidden} hasFocus: ${document.hasFocus()}`))
  }



  public render() {
    const {logId, logAction} =  this.state;
    return (
      <div>
        <p>Hello from Demo_0007</p>
        <button onClick={this.clickButtonHandler}>CLICK ME</button>
        <p>{`ACTION: ${logId} ${logAction}`}</p>
      </div>
    );
  }

  private clickButtonHandler = () => {
    this.setState({
      logAction: "CLICKED",
      logId: this.state.logId+1,
    })
  }
}
