import React from "react";
import AboutMePic from "../../Images/aboutmepic.jpeg";
import Grid from "@material-ui/core/Grid";
import "./style.css";

function AboutMe() {
  return (
    <div>
      <Grid
        container
        alignItems="center"
      >
        <Grid item md={9} sm={12}>
          <div className=" about-me-area">
            <p className="title">Personal Info</p>
            <p className="about-me-text">
              Hi my name is Jeff and I am a web developer living in Jackson, WY.
              I started coding on my own as a way to challenge myself and learn
              a new skill. The fusion of creativity and logic sparked my
              interest and I soon found myself pursuing a new career rather than
              hobby. When I am not coding, I can be found exploring Jackson's
              surrounding mountains and rivers. My favorite hobbies include
              skiing, mountain biking, rafting, surfing, scuba diving,
              rollerblading and fly fishing.
            </p>
            <p className="title">Technical Skills</p>
            <p className="about-me-text">
              Proficient in HTML, CSS, Javascript, JQuery, Bootstrap. <br></br>
              Working knowledge of React.js, MySQL, MongoDB, Node.js, Postman,
              Insomnia, Github, Heroku, Microsoft Office.
            </p>
            <p className="title">Education</p>
            <p className="about-me-text">
              I recently completed The University of Denver's full stack coding
              bootcamp in June, 2021. Before that, I graduated from Elon
              University in 2016 with a Bachelor's Degree in Business Management
              and a minor in Asian Studies.
            </p>
          </div>
        </Grid>
        <Grid item md={3} sm={12}>
          <img className="about-me-pic" src={AboutMePic} alt="About Me"></img>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;
