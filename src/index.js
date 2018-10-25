import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import $ from 'jquery';
//import Popper from 'popper.js';

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
