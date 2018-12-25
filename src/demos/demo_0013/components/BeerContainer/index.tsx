import * as React from "react";
import "./index.scss";

interface IProps extends IBeerResponse {
  key?:any;
}

const BeerContainer:React.FC<IProps> = (props:IProps) => {
  const {name, image_url} = props;
  return (
    <div className="beer-container">
      <img className="beer-image" src={image_url}/>
      <span className="beer-label">{name}</span>
    </div>
  )
};

export default BeerContainer;