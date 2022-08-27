/* eslint-disable react/button-has-type */
import { React, useContext } from "react";

import { FaSpotify } from "react-icons/fa";
import { UserContext } from "../UserContext";
import EarPhone from "../images/headphone-1.png";

export function LoginRightSection() {
  const { handleLogin } = useContext(UserContext);
  return (
    <div className="right__section--container">
      <div className="section__content">
        <h1>NDULE PLAY</h1>
        <div className="earphone__image--container bounce">
          <img src={EarPhone} alt="ear phone cover" />
        </div>
        <h3>Streaming Music Application</h3>
        <h3>Made in Congo</h3>
        <button className="handle__login--button" onClick={handleLogin}>
          <FaSpotify className="spotify__icon" />
          <span>Continuez avec Spotify</span>
        </button>

        <h4>By Sam Bisselele</h4>
      </div>
    </div>
  );
}

export default LoginRightSection;
