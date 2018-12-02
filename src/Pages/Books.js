import React, { Component } from "react";
import "../App.css";
import Card from "../Components/Card.js";
//import BookCard from "../Components/Card.js";

class Books extends Component {
  render() {
    return (
      <div className="container-fluid" id="container-scroll">
          <div className="col-lg-12">
            <Card title="Books" height="55rem"
              body =
              <div className="scrolling-wrapper">
                <div className="card-deck" style={{paddingTop: "5rem"}}>
                  <Card title="Intro to Operating Systems" message="322" height="30rem"/>
                  <Card title="Data Mining" message="484"/>
                  <Card title="Combinatorial Algorithms" message="482"/>
                  <Card title="Discrete Structures" message="252"/>
                </div>
              </div>
            />
          </div>
      </div>
    );
  }
}

export default Books;
