import React, { Component } from "react";
import "../App.css";

class User extends Component {
  state = {
    name: this.props.name
  };

  render() {
    return (
      <button className="toggle-button" onClick={this.props.click}>
        <div className="Name-settings">
          {this.props.name}
          <img
            src={require("../Images/empty-avatar.png")}
            alt="."
            width="40"
            height="40"
            style={{ padding: 5, borderRadius: "50%" }}
          />
        </div>
      </button>
    );
  }
}

export default User;
