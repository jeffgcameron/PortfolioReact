import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";

class Footer extends Component {

  render() {

    // const {isSummer}= this.props

  return (
    <div>
      <footer className={this.props.isSummer ? "footer-summer" : "footer-winter"}>
        <div className="media media-top">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto: jeffgcameron@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} className="social" />
          </a>
        </div>
        <a className="info" href="mailto: jeffgcameron@gmail.com">
          {" "}
          jeffgcameron@gmail
        </a>

        <div className="media media-bottom">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jeffgcameron"
          >
            <FontAwesomeIcon icon={faGithub} className="social" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/mynamesjefph/"
          >
            <FontAwesomeIcon icon={faInstagram} className="social" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jeffgcameron/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="social" />
          </a>
        </div>
      </footer>
    </div>
  );
}
}

export default Footer;
