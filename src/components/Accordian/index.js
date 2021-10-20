import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
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
))(({ theme }) => ({
  backgroundColor:
    "rgb(105, 124, 160, 0.25)",
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
//   borderTop: "1px solid rgba(0, 0, 0, .125)",/
}));

export default function AboutMeAccordian() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="accordion-div">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
         
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <p  className="title" >Personal Info</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="about-me-text">
            Hi my name is Jeff and I am a web developer living in Jackson, WY. I
            started coding on my own as a way to challenge myself and learn a
            new skill. The fusion of creativity and logic sparked my interest
            and I soon found myself pursuing a new career rather than hobby.
            When I am not coding, I can be found exploring Jackson's surrounding
            mountains and rivers. My favorite hobbies include skiing, mountain
            biking, rafting, surfing, scuba diving, rollerblading and fly
            fishing.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <p className="title">Technical Skills</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="about-me-text">
          Proficient in HTML, CSS, Javascript, React.js, Material UI, JQuery, Bootstrap. <br></br>
              Working knowledge of MySQL, MongoDB, Node.js, Postman,
              Insomnia, Github, Heroku, Microsoft Office.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <p className="title">Education</p>
        </AccordionSummary>
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
