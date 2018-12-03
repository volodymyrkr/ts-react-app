import * as React from "react";
import {Link} from "react-router-dom";
import {HomeIcon} from "../../assets/icons/HomeIcon";
import "./index.css";

interface IProps {
  children?: any
}

export const Header = (props: IProps) => {
  return (
    <div className="header">
      <div className="header header-icon">
        <Link to="/">
          <HomeIcon/>
        </Link>
      </div>
      <div className="header header-title">
        {props.children}
      </div>
    </div>
  )
}