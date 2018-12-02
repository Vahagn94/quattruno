import React, { Component } from "react";
import "../App.css";

class Book extends Component {
  state = {
    image: this.props.image,
    price: this.props.price,
    title: this.props.title,
    course: this.props.course,
    description: this.props.description,
    height: this.props.height,
    contactInfo: this.props.contactInfo
  };

  render() {
    return (
      <div class="card">
        <div class="imagecont">
          <img
            class="card-img-top"
            src={require("./book-picture-example2.jpg")}
            alt="Card image cap"
          />
          <div class="overlay">
            <div class="text">
              If interested contact {this.props.contactInfo}
            </div>
          </div>
        </div>
        <label class="price">${this.props.price}</label>
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{this.props.course}</h6>
          <p class="card-text">{this.props.description}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    );
  }
}

export default Book;
