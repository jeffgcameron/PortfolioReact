import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Grid from "@material-ui/core/Grid";
import "./style.css";

function ProjectCard(props) {
  return (
    <Grid item sm={12} md={4} className="card-grid">
      <div className="card">
        <div className="card-col">
          <a
            className="card-content"
            href={props.site}
            target="_blank"
            rel="noreferrer"
          >
            <img alt={props.name} src={props.image} className="card-image"></img>
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
            </div>
          </a>
          <div className="media">
            <a target="_blank" rel="noreferrer" href={props.site}>
              <FontAwesomeIcon icon={faGlobeAmericas} className="site-link" />
            </a>
            <a target="_blank" rel="noreferrer" href={props.github}>
              <FontAwesomeIcon icon={faGithub} className="site-link" />
            </a>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default ProjectCard;
