/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { React } from "react";

import MusicEcaliserImage from "../images/musique-fond-egaliseur-haut-parleur_1017-32860.jpg";

export const HomePageSlider = () => {
  return (
    <div
      style={{
        width: "95%",
        height: "400px",
        margin: "auto",
      }}
      className="homepage__cover--container"
    >
      <img
        src={MusicEcaliserImage}
        alt="music egaliseur "
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "25px",
        }}
      />
    </div>
  );
};

export default HomePageSlider;
