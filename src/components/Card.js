/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */

import React, { useContext } from "react";
import { FiPlay } from "react-icons/fi";

import "../styles/albumitem.css";
import { UserContext } from "../UserContext";

export const Card = ({ props }) => {
  const { setPlay } = useContext(UserContext);
  return (
    <>
      <div className="card__item--container" key={props.id}>
        <div className="card__image--container">
          <img src={props.images[0].url} alt="artits" />
        </div>
        <div
          className="play__icon--container"
          // eslint-disable-next-line no-console
          onClick={() => {
            setPlay(true);
          }}
        >
          <FiPlay className="play__icon" />
        </div>
        <h4 className="card__name">{props.name}</h4>
      </div>
    </>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> feature/mobile-version
export default Card;
