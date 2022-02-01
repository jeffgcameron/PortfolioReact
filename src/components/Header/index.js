import React, { Component } from "react";
// import DropDownMenu from "../Dropdown/index"
import Switch from '@mui/material/Switch';
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
import Logo from "../../Images/logogrey.png"
import Resume from "../../Images/JeffGCameronResume.pdf";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import PermContactCalendarSharpIcon from '@mui/icons-material/PermContactCalendarSharp';

import Dropdown from "react-bootstrap/Dropdown";

import "./style.css"

class Header extends Component {

    state = {
        isSummer: false,
    }
    
    render() {

        const {toggleSeason} = this.props;
    return (
        <header className={this.props.isSummer ? "header-summer" : "header-winter"}>
        <nav>
                <img className= "logo-style" src={Logo} alt="logo"/>
               <span className="season-change">
                {/* <Switch onClick={changeSeason} id="season-switch" /> */}
                <p className="season-title">{this.props.isSummer ? "": "Winter"}</p>
                <Switch color= "default" onClick={toggleSeason} />
                <p className="season-title">{this.props.isSummer ? "Summer": ""}</p>
                </span>
               
            <span className="navbar-text">
                <ul className="nav">
                    <li className="nav-item full">
                        <a className="header-link" href="#about-me"> About Me</a>
                    </li>
                    <li className="nav-item full">
                        <a className="header-link" href="#portfolio"> Portfolio</a>
                    </li>
                    <li className="nav-item full">
                        <a className="header-link" href="#connect"> Connect</a>
                    </li>
                    <li className="nav-item full">
                        <a target = "_blank" rel="noreferrer" className="header-link" href={Resume} download><DownloadSharpIcon /> Resume</a>
                    </li>
                    <li className="nav-item">
                    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <MenuIcon/>
        </Dropdown.Toggle>

        <Dropdown.Menu className={this.props.isSummer ? "dropdown-menu-summer" : "dropdown-menu-winter"} >
          <Dropdown.Item href="#about-me"><AccountCircleOutlinedIcon className="dropdown-icon" /> About Me</Dropdown.Item>
          <Dropdown.Item href="#portfolio"><AppsOutlinedIcon className="dropdown-icon"/>Portfolio</Dropdown.Item>
          <Dropdown.Item href="#connect"><PermContactCalendarSharpIcon className="dropdown-icon"/>Lets Connect!</Dropdown.Item>
          <Dropdown.Item target = "_blank" rel="noreferrer" href={Resume} download> <DownloadSharpIcon className="dropdown-icon"/>Resume</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
                    </li>
                </ul>
            </span>
        </nav>

    </header>
    )
} }

export default Header;