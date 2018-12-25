import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as UAParser from "ua-parser-js";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from "./routes";

const parser = new UAParser();
console.log(parser.getResult().device.type);
document.documentElement.className = "root_device_type_"+parser.getResult().device.type+" root_device_vendor_"+parser.getResult().device.vendor;

ReactDOM.render(
  <Routes/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
