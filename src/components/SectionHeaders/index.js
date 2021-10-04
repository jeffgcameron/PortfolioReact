import React from "react";
import "./style.css";

function SectionHeader(props) {
    return (
    <div id={props.id}>
    <div className="about-me-div section-div ">
      <p className="section">{props.name}</p>
      <hr className="logo-line space" />
    </div>
  </div>
    )
}

export default SectionHeader