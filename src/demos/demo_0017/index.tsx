import * as React from "react";
interface IDemoProps { someData: string }

interface IDemoState { someData: string }

export class Demo0017 extends React.Component<IDemoProps, IDemoState> {
  constructor(props: IDemoProps) {
    super(props);
    this.state = {
      someData: ""
    }
  }
  public execute(data: string) {
    this.setState({
      someData: data
    });
  }

  public componentDidUpdate(prevProps: Readonly<IDemoProps>, prevState: Readonly<IDemoState>, snapshot?: any): void {
    setTimeout(() => {
      this.setState(({someData}) => (
        {
          someData:""
        }
      ))
    }, 5000);
  }

  public render() {
    return (
      <React.Fragment>
        {
          !!this.state && !!this.state.someData && <div>Demo0017 is here {this.state.someData}</div>
        }
      </React.Fragment>
    )
  }
}

export default Demo0017;