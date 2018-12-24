import * as React from "react";
import BeerContainer from "../BeerContainer";

interface IProps {
  beers: IBeerResponse[]
}

const BeerList: React.FunctionComponent<IProps> = (props) => {
  const {beers} = props;
  return (
    <div>
      {
        beers.map((item, index) => {
          return (
            <div key={index}>
              <BeerContainer name={item.name} imageUrl={item.image_url}/>
            </div>
          )
        })
      }
    </div>
  )
};

export default BeerList;