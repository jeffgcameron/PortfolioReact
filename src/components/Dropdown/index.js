import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from "react-bootstrap/Dropdown";
import Resume from "../../Images/Jeff Cameron Resume.pdf";

import "./style.css";

function DropDownMenu() {
  return (
    <div>
      
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <MenuIcon/>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#about-me">About Me</Dropdown.Item>
          <Dropdown.Item href="#portfolio">Portfolio</Dropdown.Item>
          <Dropdown.Item href="#connect">Lets Connect!</Dropdown.Item>
          <Dropdown.Item target = "_blank" rel="noreferrer" href={Resume} download>Resume</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropDownMenu;
