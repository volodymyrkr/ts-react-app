import * as React from "react";
import Button from "./components/button";
import Wheel from "./components/wheel";

import './index.scss';

export default class Demo0009 extends React.Component {
  public colors = [
    "red",
    "blue",
    "green",
    "#123487",
  ];

  public render() {

    return (
      <div className="demo-container">
        <div>Demo_0009</div>
        <Button/>
        <div className="wheels-container">
          {this.colors.map((item, index)=><Wheel key={index} color={item}/>)}
        </div>
      </div>
    )
  }
}