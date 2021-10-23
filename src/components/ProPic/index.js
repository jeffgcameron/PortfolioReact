import React, { Component } from "react";
import ProfilePic from "../../Images/propic.webp";
import SummerProPic from "../../Images/summerpropic.webp"
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from '@mui/material/Link';


import "./style.css";


class ProPic extends Component {

  render() {
    // const {isSummer}= this.props
    // console.log(isSummer);

  return (
    <div>
      <div className="overlay">
        <img src={ProfilePic} className={this.props.isSummer ? " hide-pic" : "propic propic-winter"} alt="Profile" />
        <img src={SummerProPic} className={this.props.isSummer ? " propic propic-summer" : "hide-pic"} alt="Summer Profile"/>
        
        <div className="image_overlay">
          <Grid container className=" image-top image-icon-container top-icon-container">
            <Grid className="image-info" item xs={12}>
              <Link href="https://github.com/jeffgcameron" rel="noopener noreferrer" target="_blank" className="propic-link">
              <GitHubIcon className="icon-style" />
              </Link >
            </Grid>
            </Grid>
            <Grid container>
            <Grid className="image-left image-info" item xs={6}>
            <Link href="https://www.linkedin.com/in/jeffgcameron/" rel="noopener noreferrer" target = "_blank" className="propic-link">
              <LinkedInIcon  className="icon-style" />
              </Link>
            </Grid>
            <Grid className="image-info" item xs={6}>
              <div className="image-right">
            <Link href="https://www.instagram.com/mynamesjefph/" rel="noopener noreferrer" target="_blank" className="propic-link">
              <InstagramIcon className="icon-style" />
              </Link>
              </div>
            </Grid>
          </Grid>
          <div className="cross"></div>
          <Grid container className=" image-bottom image-icon-container bottom-icon-container">
         
            <Grid className="image-info" item xs={12}>
            <Link href="mailto:jeffgcameron@gmail.com" rel="noopener noreferrer" target="_blank" className="propic-link">
              <MailOutlineIcon className="icon-style" />
              </Link>
            </Grid>
          </Grid>
          
        </div>
      </div>

      <h1>Jeff Cameron</h1>
      <h2>Web Developer</h2>

      
    </div>
  );
}
}

export default ProPic;
