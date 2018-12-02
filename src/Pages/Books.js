import React, { Component } from "react";
import "../App.css";
import Card from "../Components/Card.js";
//import BookCard from "../Components/Card.js";

class Books extends Component {
  render() {
    return (
      <div className="container-fluid" id="container-scroll">
        <div className="col-lg-12">
          <Card
            title="Books"
            height="55rem"
            body={
              <div>
                <div class="scrolling-wrapper cards">
                  <Card title="1 Intro to Operating Systems" message="322" />
                  <Card title="2 Data Mining" message="484" />
                  <Card title="3 Combinatorial Algorithms" message="482" />
                  <Card title="4 Discrete Structures" message="252" />
                  <Card title="5 Data Mining" message="484" />
                  <Card title="6 Combinatorial Algorithms" message="482" />
                  <Card title="7 Discrete Structures" message="252" />
                </div>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

export default Books;
