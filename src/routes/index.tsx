import * as React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "../App";
import {demos, RouteComponentMapper} from "../config/data/routes";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App}/>
        {
          demos.map((item, index) => {
            return (
              <Route key={index} path={item.link} exact={true} component={RouteComponentMapper[item.name]}/>
            )
          })
        }
      </Switch>
    </BrowserRouter>
  )
}