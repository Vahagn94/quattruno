import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "../Components/User.js";
import Backdrop from "../Components/Backdrop.js";
import UserDrawer from "../Components/UserDrawer.js";

class CustomNavbar extends Component {
  state = {
    userDrawerOpen: false
  };

  userDrawerHandler = () => {
    this.setState(prevState => {
      return { userDrawerOpen: !prevState.userDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ userDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.userDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary Shadow">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="noTextDecoration">
              <h1 style={{ color: "#FFFFFF", fontSize: 30 }}>CSUN Hub</h1>
            </Link>
          </div>
          <User name="Firstname Last" click={this.userDrawerHandler} />
          <UserDrawer show={this.state.userDrawerOpen} />
        </div>
      </nav>
    );
  }
}

export default CustomNavbar;
