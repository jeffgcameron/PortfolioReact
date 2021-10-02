import React from "react";
import Header from "../components/Header/index";
import Propic from "../components/ProPic/index";
import LogoLine from "../components/Logo/index";
import AboutMe from "../components/AboutMe/index"

function HomePage() {
  return (
    <div>
      <div className="landing">
        <Header />
        <Propic />
      </div>
      <div className="main">
      <LogoLine />
      <AboutMe />
      </div>
    </div>
  );
}

export default HomePage;
