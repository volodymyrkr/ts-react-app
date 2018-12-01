import * as React from "react";

interface IProps {
  defaultValue? :string
}
export default class FormComponent extends React.Component<IProps> {
  public render() {
    const {defaultValue} = this.props;
    return (
      <div>
        <input value={defaultValue}/>
        <button onClick={this.clickSendButtonHandler}>send data</button>
      </div>
    )
  }

  private clickSendButtonHandler(e:React.MouseEvent<HTMLButtonElement>) {
    console.log("CLICKED");
  }}