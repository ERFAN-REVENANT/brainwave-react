import React, { Fragment } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <Fragment>
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Header></Header>
      </div>
      <ButtonGradient></ButtonGradient>
    </Fragment>
  );
};

export default App;
