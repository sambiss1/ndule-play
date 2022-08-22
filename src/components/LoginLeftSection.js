import { React } from "react";

import Logo from "../images/ndule-play-logo-white.png";

import "../styles/loginPage.css";

export function LoginLeftSection() {
  return (
    <div className="left__section--container">
      <div className="left__section--image">
        <img src={Logo} alt="logo officiel" />
      </div>
    </div>
  );
}

export default LoginLeftSection;
