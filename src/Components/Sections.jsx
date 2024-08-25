import React from "react";
import "./Section.css"

const Sections = (props) => {
  return (
    <div className="section">
      <div className="info">
        <div className="info-left">
          <img src={props.image} alt="" />
          <div className="left-head">
            <h3>{props.heading}</h3>
            <p className="deets">{props.details}</p>
          </div>
        </div>
        <p className="time">{props.timeline}</p>
      </div>
    </div>
  );
};

export default Sections;
