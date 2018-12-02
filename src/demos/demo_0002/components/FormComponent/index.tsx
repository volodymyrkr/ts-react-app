import * as React from "react";

interface IProps {
  defaultValue?: string
}

interface IState {
  defaultValue: string
}

export default class FormComponent extends React.Component<IProps, IState> {
  public state = {
    defaultValue: 'Empty string'
  };

  constructor(props: Readonly<IProps>) {
    super(props);

    this.setState({
      defaultValue: props.defaultValue ? props.defaultValue : ''
    });
  }

  public render() {
    const {defaultValue} = this.state;
    return (
      <div>
        <div>{defaultValue}</div>
        <input value={defaultValue} onChange={this.changeTextIputHandler}/>
        <button onClick={this.clickSendButtonHandler}>send data</button>
      </div>
    )
  }

  private changeTextIputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log("CHANGED");
    this.setState({
      defaultValue: e.target.value
    });
  };

  private clickSendButtonHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    console.log("CLICKED");
  };
}