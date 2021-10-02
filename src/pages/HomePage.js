import React, { Component } from "react";
import Header from "../components/Header/index";
import Propic from "../components/ProPic/index";
import LogoLine from "../components/Logo/index";
import AboutMe from "../components/AboutMe/index";
import PortHead from "../components/PortfolioHeader/index"
import Wrapper from "../components/Wrapper/index"
import ProjectCard from "../components/ProjectCard/index"
import projects from "../projects.json"

class HomePage extends Component {
  state = {
    projects
  }


render() {
  return (
    <div>
      <div className="landing">
        <Header />
        <Propic />
      </div>
      <div className="main">
      <LogoLine />
      <AboutMe />
    
      <PortHead />
      <Wrapper >
      {this.state.projects.map(projects => (
        <ProjectCard
        id={projects.id}
        name={projects.name}
        description={projects.description}
        site={projects.site}
        github = {projects.github}
        />
      ))}
      </Wrapper>
      {/* <ProjectCard
      image={projects[0].image}
      name={projects[0].name}
      description = {projects[0].description}
      site = {projects[0].site}
      github = {projects[0].github}
       /> */}
      </div>
    </div>
  );
}
}

export default HomePage;
