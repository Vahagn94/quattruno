import React, { Component } from "react";
import "../App.css";

class BookCard extends Component {
  state = {
    title: this.props.title,
    message: this.props.message,
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.message}</p>
        </div>
      </div>
    );
  }
}

export default BookCard;
