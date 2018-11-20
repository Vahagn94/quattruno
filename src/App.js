import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary Shadow">
          <div className="container-fluid">
            <div className="navbar-header">
              <h1 style={{ color: "#FFFFFF", fontSize: 30 }}>CSUN Hub</h1>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Card title="Books" message="Buy & Sell Books" />
            </div>
            <div className="col-sm-6">
              <Card title="Notes" message="Upload & View Notes" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
