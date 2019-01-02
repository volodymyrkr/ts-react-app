import * as React from "react";
import DataStore, {dataStore} from "../../stores/data.store";

interface IProps {
  dataStore: DataStore
}

export default class DataInput extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <p>Input some text:</p>
        <div>
          <input type="text" onChange={this.changeInputHandler}/>
        </div>
      </div>
    )
  }

  private changeInputHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log("INPUT IS CHANGED", event.target.value);
    dataStore.someData = event.target.value;
  }
}