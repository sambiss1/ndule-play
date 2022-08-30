/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import { React, useContext } from "react";
import { Link } from "react-router-dom";

import { FiPlay } from "react-icons/fi";
import { UserContext } from "../UserContext";
import "../styles/albumitem.css";

const TopArtistCard = ({ props }) => {
    const { anUri, play, setAnUri, setPlay } = useContext(UserContext);
    return (
        <div className="card__item--container" key={props.id}>
            <Link to={`/artist/${props.id}`} className="track__link">
                <div className="card__image--container">
                    <img src={props.images[0].url} alt="artits" />
                </div>
            </Link>
            <div
                className="play__icon--container"
                onClick={() => {
                    setAnUri(props.uri);
                    setPlay(true);
                }}
            >
                {anUri === props.uri && play ? (
                    <div className="spinner">
                        <div className="r1"></div>
                        <div className="r2"></div>
                        <div className="r3"></div>
                        <div className="r4"></div>
                        <div className="r5"></div>
                    </div>
                ) : (
                    <FiPlay className="play__icon" />
                )}
            </div>
            <Link to={`/artist/${props.id}`}>
                <h4 className="card__name">{props.name}</h4>
            </Link>
        </div>
    );
};

export default TopArtistCard;