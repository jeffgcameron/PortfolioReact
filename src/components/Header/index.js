import React from "react";
import DropDownMenu from "../Dropdown/index"
import Logo from "../../Images/logogrey.png"
import Resume from "../../Images/Jeff Cameron Resume.pdf";
import "./style.css"

function Header() {
    return (
        <header>
        <nav>
                <img className= "logo-style" src={Logo} height="30px" alt="logo"/>
            
            <span className="navbar-text">
                <ul className="nav">
                    <li className="nav-item full">
                        <a className="nav-link" href="#about-me">About Me</a>
                    </li>
                    <li className="nav-item full">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item full">
                        <a className="nav-link" href="#connect">Connect</a>
                    </li>
                    <li className="nav-item full">
                        <a target = "_blank" rel="noreferrer" className="nav-link" href={Resume} download>Resume</a>
                    </li>
                    <li className="nav-item">
                        < DropDownMenu />
                    </li>
                </ul>
            </span>
        </nav>

    </header>
    )
}

export default Header;