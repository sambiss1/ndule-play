/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from "react";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/albumitem.css";
import { UserContext } from "../UserContext";

export const RecentlyPlayedCard = ({ props }) => {
    const { setPlay, setAnUri } = useContext(UserContext);
    return (<div className="card__item--container" key={props.track.id}>
        <Link to={`/album/${props.track.album.id}`} className="track__link">
            <div className="card__image--container">
                <img src={props.track.album.images[0].url} alt="artits" />
            </div>
        </Link>
        <div className="play__icon--container" onClick={() => {
            setAnUri(props.track.uri);
            setPlay(true);
        }}>
            <FiPlay className="play__icon" />
        </div>
        <Link to={`/artist/${props.track.artists[0].id}`}>
            <h4 className="card__name">{props.track.artists[0].name}</h4>
        </Link>
        <Link to={`/track/${props.track.id}`} className="track__link">
            <h4 className="album__name">{props.track.name}</h4>
        </Link>
    </div>);
};

export default RecentlyPlayedCard;
