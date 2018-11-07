import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card.js";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid" id="container-scroll">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              {/* insert navigation in this column */}
            </div>

            <div className="col-sm-6 col-lg-3">
              <Link to="/Books">
                <Card title="Books" message="Buy and Sell Books" />
              </Link>
            </div>

            <div className="col-sm-12 col-lg-3">
              <Link to="/Notes">
                <Card title="Notes" message="Share Notes" />
              </Link>
            </div>

            <div className="col-sm-12 col-lg-3">
              <Link to="/RideSharing">
                <Card title="Ridesharing" message="Ride Together" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
