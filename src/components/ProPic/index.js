import React from "react";
import ProfilePic from "../../Images/propic.png";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { makeStyles } from "@mui/styles";
import Link from '@mui/material/Link';


import "./style.css";
// import { stepClasses } from "@mui/material";

const useStyles = makeStyles({
  iconStyle: {
    transform: "scale(3)",
    margin: "0, 15px, 0, 0"
  }
});

function ProPic() {
  const classes = useStyles();

  return (
    <div>
      <div className="overlay">
        <img src={ProfilePic} className="propic" alt="Profile" />
        
        <div className="image_overlay">
          <Grid container className=" image-top image-icon-container top-icon-container">
            <Grid className="image-info" item xs={12}>
              <Link href="https://github.com/jeffgcameron" rel="noopener noreferrer" target="_blank" className="propic-link">
              <GitHubIcon className={classes.iconStyle} />
              </Link >
            </Grid>
            </Grid>
            <Grid container>
            <Grid className="image-left image-info" item xs={6}>
            <Link href="https://www.linkedin.com/in/jeffgcameron/" rel="noopener noreferrer" target = "_blank" className="propic-link">
              <LinkedInIcon  className={classes.iconStyle} />
              </Link>
            </Grid>
            <Grid className="image-info" item xs={6}>
              <div className="image-right">
            <Link href="https://www.instagram.com/mynamesjefph/" rel="noopener noreferrer" target="_blank" className="propic-link">
              <InstagramIcon className={classes.iconStyle} />
              </Link>
              </div>
            </Grid>
          </Grid>
          <div className="cross"></div>
          <Grid container className=" image-bottom image-icon-container bottom-icon-container">
         
            <Grid className="image-info" item xs={12}>
            <Link href="mailto:jeffgcameron@gmail.com" rel="noopener noreferrer" target="_blank" className="propic-link">
              <MailOutlineIcon className={classes.iconStyle} />
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

export default ProPic;
