import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class CustomNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary Shadow" >
        <div className="container-fluid">
          <div className="navbar-header">
          <Link to="/">
            <h1 style={{ color: "#FFFFFF", fontSize: 30 }}>CSUN Hub</h1>
          </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default CustomNavbar;
