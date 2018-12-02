import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card.js";
import "../App.css"

class Home extends Component {
  render() {
    return (
        <div>
          <div className="container-fluid" id="container-scroll">
            <div className="row">

              <div className="col-sm-6 col-lg-3">
                { /* insert navigation in this column */ }
              </div>

              <div className="col-sm-6 col-lg-3">
                <Link to="/Books" className="noTextDecoration">
                  <Card title="Books" message="Buy and Sell Books" height="50rem"/>
                </Link>
              </div>

              <div className="col-sm-12 col-lg-3">
                <Link to="/Notes" className="noTextDecoration">
                  <Card title="Notes" message="Share Notes" height="50rem" />
                </Link>
              </div>

              <div className="col-sm-12 col-lg-3">
                <Link to="/RideSharing" className="noTextDecoration">
                  <Card title="Ridesharing" message="Ride Together" height="50rem"/>
                </Link>
              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default Home;
