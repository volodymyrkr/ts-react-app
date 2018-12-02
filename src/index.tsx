import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from "./routes";

ReactDOM.render(
  <Routes/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
