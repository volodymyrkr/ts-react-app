import * as React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "../App";
import DemoComponent from "../demos/demo_0001/components/DemoComponent";
import FormComponent from "../demos/demo_0002/components/FormComponent";
import CurrencyList from "../demos/demo_0003/components/CurrencyList";
import CurrenciesPage from "../demos/demo_0004/components/CurrenciesPage";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App}/>
        <Route path="/demo_0001" exact={true} component={DemoComponent}/>
        <Route path="/demo_0002" exact={true} component={FormComponent}/>
        <Route path="/demo_0003" exact={true} component={CurrencyList}/>
        <Route path="/demo_0004" exact={true} component={CurrenciesPage}/>
      </Switch>
    </BrowserRouter>
  )
}