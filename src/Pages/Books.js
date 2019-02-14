import React, { Component } from "react";
import "../App.css";
import Card from "../Components/Card.js";
import Book from "../Components/Book.js";

class Books extends Component {
  render() {
    return (
      <div className="container-fluid" id="container-scroll">
        <div className="col-lg-12">
          <Card
            title="Books"
            height="55rem"
            body={
              <div className="card-deck">
                <Book
                  price="100"
                  title="Intro to Operating Systems"
                  course="COMP 322"
                  description="Hard-Cover book, bought brand-new and used for a semester. Email if interested only"
                  contactInfo="someonesPrivate@email.com"
                />
                <Book
                  price="79"
                  title="Data Mining"
                  course="COMP 484"
                  description="Selling as a SET 'Psychological Assessment with the MMPI-2' Alan F. Friedman, Richard Lewak, David S. Nicols, James T. Webb 'Essentials of the PAI Assessment' Leslie C. ..."
                  contactInfo="someoneElse@email.com"
                />
                <Book
                  price="30"
                  title="Combinatorial Algorithms"
                  course="COMP 482"
                  description="First come first serve"
                  contactInfo="anotherSomeone@email.com"
                />
                <Book
                  price="55"
                  title="Discrete Structures"
                  course="COMP 252"
                  description="Have many other books for sale"
                  contactInfo="yes@email.com"
                />
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

export default Books;
