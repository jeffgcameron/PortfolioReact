import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class Form extends Component {

render() {

  return (
    <div>
      <form action="https://formsubmit.co/jeffgcameron@gmail.com" method="POST">
        <div className="row section-content">
          <div className="col first-pad">
            <input
              type="text"
              id="first-input"
              name="first name"
              className="form-control"
              placeholder="First Name"
              required
            />
          </div>
          <div className="col last-pad">
            <input
              type="text"
              id="last-input"
              name="last name"
              className="form-control"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://jeffgcameron.github.io/PortfolioReact/#connect"
        />
        <input
          type="email"
          name="email"
          className="form-control section-content"
          id="email-input"
          placeholder="Email"
          aria-describedby="emailHelp"
          required
        />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="text"
          name="_subject"
          className="form-control section-content"
          placeholder="Subject"
          required
        />
        <div className="form-group">
          <textarea
            type="text"
            name="Message"
            className="form-control section-content"
            id="message-input"
            placeholder="Write Your Message Here"
            rows="6"
            required
          ></textarea>
        </div>
        <button type="submit" value="Send" id ="form-success" className={this.props.isSummer ? "button-summer send-btn btn btn-primary" : "button-winter send-btn btn btn-primary"}>
          <FontAwesomeIcon icon = {faPaperPlane} className="send-icon"></FontAwesomeIcon>Send
        </button>
        <div id="response"></div>
      </form>
    </div>
  );
}
}

export default Form;
