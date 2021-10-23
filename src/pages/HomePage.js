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

import GroceryGrab from "../Images/GroceryGrab.webp"
import CineMunch from "../Images/CineMunch.webp"
import DevDash from "../Images/DevDash.webp"
import DCS from "..//Images/DCScreenshot.webp"
import Tech from "../Images/TechBlog.webp"
import Directory from "../Images/EmployeeDirectory.webp"
import ReadMe from "../Images/README.webp"
import Password from "../Images/Password.webp"
import Quiz from "../Images/Quiz.webp"


import projects from "../projects.json";
import headers from "../headers.json";

const images = [GroceryGrab, CineMunch, DevDash, DCS, Tech, Directory, ReadMe, Password, Quiz];

class HomePage extends Component {
  state = {
    projects,
    isSummer: false, 
  };

  toggleSeason = () => {
    this.setState({isSummer: !this.state.isSummer})
    console.log(this.state.isSummer);
    if (this.state.isSummer=== false) {
      console.log("its winter!");
      document.body.classList.add('body-summer');
    } else 
      document.body.classList.remove('body-summer');
  }

  render() {

   
    
    return (
      <div>
        <div className="landing">
          <Header toggleSeason={this.toggleSeason} isSummer={this.state.isSummer}/>
          <Propic isSummer={this.state.isSummer}/>
        </div>
        <div className="main">
          <LogoLine isSummer={this.state.isSummer}/>
          <SectionHeader id="about-me" name={headers[0].name} />
          <AboutMe  isSummer={this.state.isSummer}/>
          <SectionHeader id="portfolio" name={headers[1].name} />
          <Wrapper>
            {this.state.projects.map((projects, index) => (
              <ProjectCard
                key={projects.id}
                image={images[index]}
                name={projects.name}
                description={projects.description}
                site={projects.site}
                github={projects.github}
                problem ={projects.problem}
                tech= {projects.tech}
                isSummer={this.state.isSummer}
              />
            ))}
          </Wrapper>
          <SectionHeader id="connect" name={headers[2].name} />
          <Form  isSummer={this.state.isSummer}/>
        </div>
        <Footer isSummer={this.state.isSummer}/>
      </div>
    );
  }
}

export default HomePage;

