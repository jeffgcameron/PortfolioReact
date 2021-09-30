import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../../Images/logogrey.png"
import "./style.css"

function Header() {
    return (
        <header>
        <nav>
            <a className="navbar-brand">
                <img className= "logo-style" src={Logo} height="30px" alt="logo"/>
            </a>
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
                        <a target = "_blank" className="nav-link" href="./Assets/Resume/Jeff Cameron Resume.pdf" download>Resume</a>
                    </li>
                    <li className="nav-item dropdown burger">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#about-me">About Me</a>
                            <a className="dropdown-item" href="#portfolio">Portfolio</a>
                            <a className="dropdown-item" href="#connect">Connect</a>
                            <a target = "_blank" className="dropdown-item" href="./Assets/Resume/Jeff Cameron Resume.pdf">Resume</a>
                        </div>
                    </li>
                </ul>
            </span>
        </nav>

    </header>
    )
}

export default Header;