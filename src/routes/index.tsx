import * as React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "../App";
import DemoComponent from "../demos/demo_0001/components/DemoComponent";
import FormComponent from "../demos/demo_0002/components/FormComponent";
import CurrencyList from "../demos/demo_0003/components/CurrencyList";
import CurrenciesPage from "../demos/demo_0004/components/CurrenciesPage";
import Demo0005 from "../demos/demo_0005";
import Demo0007 from "../demos/demo_0007";
import Demo0008 from "../demos/demo_0008";
import Demo0009 from "../demos/demo_0009";
import Demo0010 from "../demos/demo_0010";
import Demo0011 from "../demos/demo_0011";
import Demo0012 from "../demos/demo_0012";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App}/>
        <Route path="/demo_0001" exact={true} component={DemoComponent}/>
        <Route path="/demo_0002" exact={true} component={FormComponent}/>
        <Route path="/demo_0003" exact={true} component={CurrencyList}/>
        <Route path="/demo_0004" exact={true} component={CurrenciesPage}/>
        <Route path="/demo_0005" exact={true} component={Demo0005}/>
        <Route path="/demo_0007" exact={true} component={Demo0007}/>
        <Route path="/demo_0008" exact={true} component={Demo0008}/>
        <Route path="/demo_0009" exact={true} component={Demo0009}/>
        <Route path="/demo_0010" exact={true} component={Demo0010}/>
        <Route path="/demo_0011" exact={true} component={Demo0011}/>
        <Route path="/demo_0012" exact={true} component={Demo0012}/>
      </Switch>
    </BrowserRouter>
  )
}