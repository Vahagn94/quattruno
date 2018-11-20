import React, { Component } from "react";
import "../App.css";

class Card extends Component {
  state = {
    title: this.props.title,
    message: this.props.message
  };

  render() {
    return (
      <div className="card" style={{height: "48rem", borderRadius: "5px"}}>
        <div className="card-body" style={{paddingTop: "3rem"}}>
          <h5 className="card-title" style={{fontSize: "2rem"}}>{this.props.title}</h5>
          <p className="card-text" style={{paddingTop: "1rem"}}>{this.props.message}</p>
        </div>
      </div>
    );
  }
}

export default Card;
