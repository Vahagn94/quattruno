import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary Shadow" >
          <div className="container-fluid">
            <div className="navbar-header">
              <h1 style={{ color: "#FFFFFF", fontSize: 30 }}>CSUN Hub</h1>
            </div>
          </div>
        </nav>
        <div className="container-fluid" id="container-scroll">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              { /* insert navigation in this column */ }
            </div>
            <div className="col-sm-6 col-lg-3">
              <a href="/" className="pagerLink">
                <Card title="Books" message="Buy and Sell Books" />
              </a>
            </div>
            <div className="col-sm-12 col-lg-3">
              <a href="/" className="pagerLink">
                <Card title="Notes" message="Upload & Download Class Notes" />
              </a>
            </div>
            <div className="col-sm-12 col-lg-3">
              <a href="/" className="pagerLink">
                <Card title="Ridesharing" message="Carpool with Classmates" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
