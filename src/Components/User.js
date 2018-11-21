import React, { Component } from "react";
import "../App.css";

class User extends Component {
  state = {
    name: this.props.name
  };

  render() {
    return (
      <button className="toggle-button" onClick={this.props.click}>
        <div
          className="Name-settings"
          style={{ fontWeight: 500, fontSize: 12 }}
        >
          {this.props.name}
          <img
            src={require("./smiley.png")}
            alt="."
            height="40"
            width="height"
            style={{ padding: 5 }}
          />
        </div>
      </button>
    );
  }
}

export default User;
