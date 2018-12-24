import * as React from "react";
import "./index.scss";

interface IProps extends IBeer {
  visible?: boolean
}

const BeerContainer: React.FunctionComponent<IProps> =(props:IProps) => {
  const { name, imageUrl} = props;
  return (
    <div className="beer-container">
      <img className="beer-image" src={imageUrl}/>
      <span className="beer-label">{name}</span>
    </div>
  )
};

export default BeerContainer