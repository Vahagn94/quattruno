import React, { Component } from "react";
import "../App.css";
import Card from "../components/Card.js";

class Books extends Component {
  render() {
    return (
        <Card title="Books" message="Buy and Sell Books" />
    );
  }
}

export default Books;
