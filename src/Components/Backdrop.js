import React from "react";

const backdrop = props => (
  <div
    stye={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zindex: "100"
    }}
    onClick={props.click}
  />
);

export default backdrop;
