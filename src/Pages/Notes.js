import React, { Component } from "react";
import "../App.css";
import Note from "../Components/Note.js";
import Card from "../Components/Card.js";

class Notes extends Component {
  render() {
    return (
      <div className="container-fluid" id="container-scroll">
          <div className="col-lg-12">
            <Card
              title="Notes"
              height="55rem"
              body={
                <div className="card-deck">
                  <Note
                    course="COMP 222"
                    teacher="Lazik"
                    comments="Section 5.2"
                    date="11-14-18"
                    dateAdded="11-17-18"
                  />
                  <Note
                    course="COMP 490"
                    teacher="Dousette"
                    comments="went over test questions"
                    date="12-3-18"
                    dateAdded="12-4-18"
                  />
                  <Note
                    course="COMP 322"
                    teacher="Isayan"
                    comments="number 5 from the hw is on the test"
                    date="12-3-18"
                    dateAdded="12-3-18"
                  />
                  <Note
                  course="COMP 482"
                  teacher="Noga"
                  comments="will post slides on Canvas"
                  date="12-4-18"
                  dateAdded="12-5-18"
                  />
                </div>
              }
            />
          </div>
      </div>
    );
  }
}

export default Notes;
