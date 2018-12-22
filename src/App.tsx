import * as React from 'react';
import './App.scss';

import {Link} from "react-router-dom";
import {demos, IDemoProps} from "./config/data";
import logo from './logo.svg';

class App extends React.Component {
  public state = {
    demosData: demos
  };

  public render() {
    const {demosData} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>
        {
          demosData.map((item:IDemoProps) => {
            return (
              <li key={item.name}>
                <Link to={item.link}>{item.name}</Link>
                <span>{item.description}</span>
              </li>
            )
          }).reverse()
        }
        </ul>
      </div>
    );
  }
}

export default App;
