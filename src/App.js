import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Notes from "./Pages/Notes";
import Navbar from "./Pages/CustomNavbar";
import RideSharing from "./Pages/RideSharing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Books" component={Books} />
          <Route path="/Notes" component={Notes} />
          <Route path="/RideSharing" component={RideSharing} />
        </div>
      </Router>
    );
  }
}

export default App;
