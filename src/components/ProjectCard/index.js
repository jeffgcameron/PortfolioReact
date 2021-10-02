import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Grid from "@material-ui/core/Grid";
import "./style.css";

function ProjectCard(props) {
  return (
    // <Grid container>
      <Grid item sm={12} md={3} className="card-grid">
        <a
          className="card-content"
          href={props.site}
          target="_blank"
          rel="noreferrer"
        >
          <div className="card">
            <div className="card-col">
              {/* <div className="card"> */}
              <img alt={props.name} src={props.image}></img>
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
              </div>
              <div className="media">
                <a a target="_blank" rel="noreferrer" href={props.site}>
                  <FontAwesomeIcon icon={faGlobeAmericas} />
                </a>
                <a a target="_blank" rel="noreferrer" href={props.github}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              {/* </div> */}
            </div>
          </div>
        </a>
      </Grid>
    // </Grid>
  );
}

export default ProjectCard;
