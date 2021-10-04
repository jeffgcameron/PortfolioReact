import React, { Component } from "react";
import Header from "../components/Header/index";
import Propic from "../components/ProPic/index";
import LogoLine from "../components/Logo/index";
import AboutMe from "../components/AboutMe/index";
import Wrapper from "../components/Wrapper/index";
import ProjectCard from "../components/ProjectCard/index";
import SectionHeader from "../components/SectionHeaders/index";
import Form from "../components/Form/index"
import Footer from "../components/Footer/index"

import projects from "../projects.json";
import headers from "../headers.json";

class HomePage extends Component {
  state = {
    projects,
  };

  render() {
    return (
      <div>
        <div className="landing">
          <Header />
          <Propic />
        </div>
        <div className="main">
          <LogoLine />
          <SectionHeader id="about-me" name={headers[0].name} />
          <AboutMe />
          <SectionHeader id="portfolio" name={headers[1].name} />
          <Wrapper>
            {this.state.projects.map((projects) => (
              <ProjectCard
                key={projects.id}
                image={projects.image}
                name={projects.name}
                description={projects.description}
                site={projects.site}
                github={projects.github}
              />
            ))}
          </Wrapper>
          <SectionHeader id="connect" name={headers[2].name} />
          <Form />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;

