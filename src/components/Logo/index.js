import React from "react";
import LogoPic from "../../Images/bluelogo.png";
// import { Container, Row, Col } from "../Grid";
import Grid from "@material-ui/core/Grid";
import "./style.css";

function LogoLine() {
  return (
    <div>
      <Grid container
      alignItems="center">
        <Grid item xs={4} md={5}>
          <hr className="logo-line" />
        </Grid>
        <Grid item xs={4} md={2}>
          <img className="logo-center" src={LogoPic} alt="Logo" />
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

export default LogoLine;
