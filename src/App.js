import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card.js";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Books from "./Pages/Books";
import Notes from "./Pages/Notes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary Shadow" >
            <div className="container-fluid">
              <div className="navbar-header">
                <h1 style={{ color: "#FFFFFF", fontSize: 30 }}>CSUN Hub</h1>
              </div>
            </div>
          </nav>
        <Switch>
          <div className="container-fluid" id="container-scroll">
            <div className="row">

              <div className="col-sm-6 col-lg-3">
                { /* insert navigation in this column */ }
              </div>

              <div className="col-sm-6 col-lg-3">
                <Route exact path="/Books" component={Books}/>
                  <Link to="/Books">
                    <Card title="Books" message="Buy and Sell Books" />
                  </Link>
              </div>

              <div className="col-lg-3">
                <Route exact path="/Notes" component={Notes}/>
                  <Link to="/Notes">
                    <Card title="Notes" message="Upload & Download Class Notes" />
                  </Link>
              </div>

              <div className="col-lg-3">
                  <Card title="Ridesharing" message="Carpool with Classmates" />
              </div>

            </div>
          </div>
        </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
