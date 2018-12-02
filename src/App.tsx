import * as React from 'react';
import './App.css';

import DemoComponent from "./demos/demo_0001/components/DemoComponent";
import FormComponent from "./demos/demo_0002/components/FormComponent";
import CurrencyList from "./demos/demo_0003/components/CurrencyList";
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <DemoComponent name={"Vladimir"}/>
          <FormComponent defaultValue={"Some text"}/>
        </div>
        <div>
          <CurrencyList/>
        </div>
      </div>
    );
  }
}

export default App;
