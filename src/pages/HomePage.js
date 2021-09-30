import React from "react";
import Header from "../components/Header/index";
import Propic from "../components/ProPic/index";
import LogoLine from "../components/Logo/index";

function HomePage() {
  return (
    <div>
      <div className="landing">
        <Header />
        <Propic />
      </div>
      <div className="main">
      <LogoLine />
      </div>
    </div>
  );
}

export default HomePage;
