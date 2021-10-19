import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import PermContactCalendarSharpIcon from '@mui/icons-material/PermContactCalendarSharp';
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
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
          <Dropdown.Item href="#about-me"><AccountCircleOutlinedIcon className="dropdown-icon" /> About Me</Dropdown.Item>
          <Dropdown.Item href="#portfolio"><AppsOutlinedIcon className="dropdown-icon"/>Portfolio</Dropdown.Item>
          <Dropdown.Item href="#connect"><PermContactCalendarSharpIcon className="dropdown-icon"/>Lets Connect!</Dropdown.Item>
          <Dropdown.Item target = "_blank" rel="noreferrer" href={Resume} download> <DownloadSharpIcon className="dropdown-icon"/>Resume</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropDownMenu;
