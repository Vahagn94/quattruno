import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom'
//import $ from 'jquery';
//import Popper from 'popper.js';

ReactDOM.render(<Router>
  <App />
  </Router>, document.getElementById("root"));

serviceWorker.unregister();
