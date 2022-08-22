/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */

import React from "react";
import { FiPlay } from "react-icons/fi";

import "../styles/albumitem.css";

export function Card({ props }) {
  return (
    <div className="card__item--container" key={props.id}>
      <div className="card__image--container">
        <img src={props.images[0].url} alt="artits" />
      </div>
      <div
        className="play__icon--container"
        // eslint-disable-next-line no-console
        onClick={() => console.log("play")}
      >
        <FiPlay className="play__icon" />
      </div>
      <h4 className="card__name">{props.name}</h4>
    </div>
  );
}

export default Card;
