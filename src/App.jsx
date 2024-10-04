import React, { Fragment } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";

const App = () => {
  return (
    <Fragment>
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Header></Header>
        <Hero></Hero>
        <Benefits></Benefits>
        <Collaboration></Collaboration>
        <Services></Services>
      </div>
      <ButtonGradient></ButtonGradient>
    </Fragment>
  );
};

export default App;
