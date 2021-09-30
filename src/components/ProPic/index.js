import React from "react";
import ProfilePic from "../../Images/propic.png";
import "./style.css";

function ProPic() {
  return (
    <div>
      <img src={ProfilePic} className="propic" alt="Profile" />
      <h1>Jeff Cameron</h1>
      <h2>Web Developer</h2>
    </div>
  );
}

export default ProPic;
