import React from "react";
import BlueLogoPic from "../../Images/bluelogo.webp";
import GreenLogoPic from "../../Images/greenlogo.webp"
import Grid from "@material-ui/core/Grid";
import "./style.css";

class LogoLine extends React.Component {

  render() {
  return (
    <div>
      <Grid container
      alignItems="center">
        <Grid item xs={4} md={5}>
          <hr className="logo-line" />
        </Grid>
        <Grid item xs={4} md={2}>
          {/* <img className="logo-center" src={BlueLogoPic} alt="Logo" /> */}
          <img className={this.props.isSummer ? "logo-hide" : "logo-center"} src={BlueLogoPic} alt="Logo"></img>
          <img className={this.props.isSummer ? "logo-center" : "logo-hide"}src={GreenLogoPic} alt="Logo"></img>
        </Grid>
        <Grid item xs={4} md={5}>
          <div className="header-line">
            <hr className="logo-line" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
}

export default LogoLine;
