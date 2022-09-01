/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
import React from "react";

import "../styles/App.css";
import "../styles/notfound.css";

function NotFound() {
  return <div className="main__container ">
    <div className="page__content not__found--container">

      
      <h1 className="not__found--title">4<span className="not__found--zero">0</span>4</h1>




      <h3 className="not__found--message">Désolé cette page n`existe pas</h3>

      <button
        className="not__found--button"
        onClick={() => window.location.replace("/")}>Retourner à l`accueil</button>
    </div>

  </div>;
}

export default NotFound;
