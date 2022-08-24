/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from "react";
import "../styles/albumitem.css";

const GenreCars = ({ props }) => {
  return (
    <div className="card__item--container" key={props.id}>
      <div className="card__image--container">
        <img src={props.icons[0].url} alt="genres musicaux" />
      </div>
      <h4 className="card__name">{props.name}</h4>
    </div>
  );
};

export default GenreCars;
