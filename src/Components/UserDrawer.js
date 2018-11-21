import React from "react";
import "./UserDrawer.css";

const userDrawer = props => {
  let drawer = "drawer";
  if (props.show) {
    drawer = "drawer open";
  }

  return (
    <nav className={drawer}>
      <ul>
        <li>Name Firstname Last</li>
        <li>Email Firstname.Last.999@my.csun.edu</li>
        <li />
        <div className="drawer_line" />
        <li />
        <li>
          Classes{" "}
          <ul>
            <li>COMP 490L</li>
            <li>COMP 108</li>
          </ul>
        </li>
        <div className="drawer_line" />
        <li>
          Other Info{" "}
          <ul>
            <li>Stuff</li>
            <li>Things</li>
          </ul>
        </li>

        <div className="drawer_line" />
        <li>Log Out</li>
      </ul>
    </nav>
  );
};

export default userDrawer;
