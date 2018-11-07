import React, { Component } from "react";
import "../App.css";
import Card from "../components/Card.js";

class Notes extends Component {
  render() {
    return (
        <Card title="Notes" message="Share Notes" />
    );
  }
}

export default Notes;
