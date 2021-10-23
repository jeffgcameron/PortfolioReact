import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5, faCss3Alt, faJs, faBootstrap, faReact, faNodeJs, faGitAlt, faMicrosoft } from "@fortawesome/free-brands-svg-icons"
import { faBicycle, faFileCode, faFish, faMountain, faSkiing, faWater } from '@fortawesome/free-solid-svg-icons'
import DenverPic from "../../Images/denver.png"
import ElonPic from "../../Images/Elon.png"


import "./style.css"


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))
(({ theme }) => ({
  
  backgroundColor:
    "rgb(43, 43, 43, 0.25)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor:
  "rgb(105, 124, 160, 0)",
}));

class AboutMeAccordian extends React.Component {
  
  state = {
    expanded: "panel1"
  }

  handleChange = (panel) => () => {
    if (panel === this.state.expanded) {
      this.setState({expanded: false})
    } else
      this.setState({expanded: panel})
  };


  render(){
    console.log(this.state.expanded);
  return (
    <div id="accordion-div">
      <Accordion
        expanded={this.state.expanded === "panel1"}
        onChange={this.handleChange("panel1")}
      >
        <AccordionSummary
         
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <p  className="title" >Personal Info</p>
        </AccordionSummary>
        <p  id="technical-icons">
        <FontAwesomeIcon icon={faFileCode} className="technical-icon-style" id="code-icon"/>
        <FontAwesomeIcon icon={faSkiing} className="technical-icon-style" id="skiing-icon"/>
        <FontAwesomeIcon icon={faMountain} className="technical-icon-style" id="mountain-icon"/>
        <FontAwesomeIcon icon={faBicycle} className="technical-icon-style" id="bike-icon"/>
        <FontAwesomeIcon icon={faWater} className="technical-icon-style" id="water-icon"/>
        <FontAwesomeIcon icon={faFish} className="technical-icon-style" id="fish-icon"/>
       

        </p>
        <AccordionDetails>
          <p className="about-me-text">
            Hi my name is Jeff and I am a web developer living in Jackson, WY. I
            started coding on my own as a way to challenge myself and learn a
            new skill. The fusion of creativity and logic sparked my interest
            and I soon found myself pursuing a new career rather than just a hobby.
            When I am not coding, I can be found exploring Jackson's surrounding
            mountains and rivers. My favorite hobbies include skiing, mountain
            biking, rafting, surfing, scuba diving, rollerblading and fly
            fishing.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={this.state.expanded === "panel2"}
        onChange={this.handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <p className="title">Technical Skills</p>
        </AccordionSummary>
        <p  id="technical-icons">
            <FontAwesomeIcon icon={faHtml5} className="technical-icon-style" id="html-icon"/>
            <FontAwesomeIcon icon={faCss3Alt} className="technical-icon-style" id="css-icon"/>
            <FontAwesomeIcon icon={faJs} className="technical-icon-style" id="js-icon"/>
            <FontAwesomeIcon icon={faReact} className="technical-icon-style" id="react-icon"/>
            <FontAwesomeIcon icon={faBootstrap} className="technical-icon-style" id="bootstrap-icon"/>
            <FontAwesomeIcon icon={faNodeJs} className="technical-icon-style" id="node-icon"/>
            <FontAwesomeIcon icon={faGitAlt} className="technical-icon-style" id="git-icon"/>
            <FontAwesomeIcon icon={faMicrosoft} className="technical-icon-style" id="microsoft-icon"/>
          </p>
        <AccordionDetails>
          <p className="about-me-text">
          Proficient in HTML, CSS, Javascript, React.js, Material UI, JQuery, Bootstrap. <br></br>
              Working knowledge of MySQL, MongoDB, Node.js, Postman,
              Insomnia, Github, Heroku, Microsoft Office.
          </p>
        
        </AccordionDetails>

      </Accordion>
      <Accordion
        expanded={this.state.expanded === "panel3"}
        onChange={this.handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <p className="title">Education</p>
        </AccordionSummary>
        <p  id="technical-icons">
        <img className="school-icon technical-icon-style" src={DenverPic} alt="Denver"></img>
        <img className="school-icon technical-icon-style" src={ElonPic} alt="Elon"></img>
        </p>
        <AccordionDetails>
          <p className="about-me-text education-text">
          I recently completed The University of Denver's full stack coding
              bootcamp in June, 2021. Before that, I graduated from Elon
              University in 2016 with a Bachelor's Degree in Business Management
              and a minor in Asian Studies.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
}
export default AboutMeAccordian
