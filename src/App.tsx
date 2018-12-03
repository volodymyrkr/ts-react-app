import * as React from 'react';
import './App.css';

import {Link} from "react-router-dom";
import logo from './logo.svg';

class App extends React.Component {
  public state = {
    demos: [
      {name: "Demo_0001", link: "/demo_0001", title: "Demo", description: "Some description"},
      {name: "Demo_0002", link: "/demo_0002", title: "Demo", description: "Some description"},
      {name: "Demo_0003", link: "/demo_0003", title: "Demo", description: "Some description"},
      {name: "Demo_0004", link: "/demo_0004", title: "Demo", description: "Some description"},
      {name: "Demo_0005", link: "/demo_0005", title: "Demo", description: "Some description"},
      {name: "Demo_0006", link: "/demo_0006", title: "Demo ReactCoin", description: "DemoApplication created by tutorial from udemy"},
      {name: "Demo_0007", link: "/demo_0007", title: "Demo", description: "It's just a little demo of creating stream from document events"},
    ]
  };

  public render() {
    const {demos} = this.state;
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
          demos.map((item) => {
            return (
              <li key={item.name}><Link to={item.link}>{item.name}</Link></li>
            )
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
