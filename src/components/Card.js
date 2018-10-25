import React, { Component } from "react";
import "../App.css";

class Card extends Component {
  state = {
    title: this.props.title,
    title: this.props.message
  };

  render() {
    return (
      <div className="card" style={{ width: "25rem", height: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.message}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
