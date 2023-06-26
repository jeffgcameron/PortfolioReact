import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Grid from "@material-ui/core/Grid";
import "./style.css";

class ProjectCard extends Component {

  render() {
  return (
    <Grid item sm={12} md={4} className="card-grid">
      <div className={this.props.isSummer ? "card-summer card" : "card-winter card"}>
        <div className="card-flip">
        <div className="card-inner">
          <div className="card-front">
            <div className="card-content">
              <img
                alt={this.props.name}
                src={this.props.image}
                className="card-image"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">{this.props.description}</p>
              </div>
           
            </div>
          </div>
          <div className="card-back">
          <h5 className="flip-header card-flip-title">Why I Built {this.props.name}</h5>
          <p className="card-flip-text">{this.props.problem}</p>
          <h5 className="flip-header card-flip-title">Technology Used</h5>
          <p className="card-flip-text">{this.props.tech}</p>
              </div>
        </div>
        </div>
        <div className="media">
          {(this.props.site === "") 
            ?''
            : <a target="_blank" rel="noreferrer" href={this.props.site}>
              <FontAwesomeIcon
                icon={faGlobeAmericas}
                className={this.props.isSummer ? "site-link-summer site-link" : "site-link-winter site-link"}
              />
            </a>
          }
                
                <a target="_blank" rel="noreferrer" href={this.props.github}>
                  <FontAwesomeIcon icon={faGithub} className={this.props.isSummer ? "site-link-summer site-link" : "site-link-winter site-link"}/>
                </a>
              </div>
      </div>
    </Grid>
  );
}
}

export default ProjectCard;
