import React, { Component } from "react";
import "../App.css";
import Card from "../components/Card.js";

class Notes extends Component {
  render() {
    return (
      <div className="container-fluid" id="container-scroll">
          <div className="col-lg-12">
            <Card title="Notes"/>
          </div>
      </div>
    );
  }
}

export default Notes;
