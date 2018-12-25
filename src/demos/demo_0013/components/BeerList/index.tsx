import * as React from "react";
import {IBeerResponse} from "../../types";
import BeerContainer from "../BeerContainer";
import "./index.scss";

interface IProps {
  beers: IBeerResponse[]
}
const BeerList: React.FunctionComponent<IProps> = (props) => {
  return (
    <div>
      <h3>Beers:</h3>
      <div className="pure-g">
        {
          props.beers.map((item:IBeerResponse, index) => {
            return (<div className="pure-u-1-4 pure-u-sm-1-1 pure-u-md-1-3" key={index}>
              <BeerContainer {...item}/>
            </div>)
          })
        }
      </div>
    </div>
  )
};

export default BeerList;