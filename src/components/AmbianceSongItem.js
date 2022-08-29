/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/function-component-definition */
import { React, useContext } from "react";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/albumitem.css";
import { UserContext } from "../UserContext";

const AmbianceSongItem = ({ props }) => {
    const { setAnUri, setPlay, anUri, play } = useContext(UserContext);

    return (
        <div className="card__item--container" key={props.id}>
            <Link to={`/album/${props.album.id}`} className="track__link">
                <div className="card__image--container">
                    <img src={props.album.images[0].url} alt="artits" />
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

            <Link to={`/artist/${props.artists[0].id}`}>
                <h4 className="card__name">{props.artists[0].name}</h4>
            </Link>
            <Link to={`/album/${props.id}`} className="track__link">
                <h4 className="album__name">{props.name}</h4>
            </Link>
        </div>
    );
};

export default AmbianceSongItem;
