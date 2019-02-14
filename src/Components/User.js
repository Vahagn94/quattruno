import React, { Component } from "react";
import "../App.css";

class User extends Component {
  state = {
    name: this.props.name
  };

  render() {
    return (
      <div className="Name-settings" style={{ fontWeight: 500, fontSize: 12 }}>
        {this.props.name}
        <img
          src={require("../Images/empty-avatar.png")}
          alt="."
          width="40"
          height="40"
          style={{ padding: 5, borderRadius: "50%" }}
        />
      </div>
    );
  }
}

export default User;
