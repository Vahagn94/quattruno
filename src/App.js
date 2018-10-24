import React, { Component } from "react";
import "./App.css";

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
              <div className="card" style={{ width: "25rem", height: "20rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Books</h5>
                  <p className="card-text">Buy & Sell Textbooks</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card" style={{ width: "25rem", height: "20rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Notes</h5>
                  <p className="card-text">Upload and View Notes</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
