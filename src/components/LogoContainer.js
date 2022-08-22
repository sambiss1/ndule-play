/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from "react";
import Logo from "../Ndule-play-logo-final.png";

import "../styles/App.css";

const LogoContainer = () => {
  return (<div className="application__logo--container">
    <img src={Logo} alt="Application official logo" />
  </div>);
};

export default LogoContainer;
