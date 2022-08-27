/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { FiHeart, FiPlay } from "react-icons/fi";

import "../styles/artisttoptracks.css";
import { UserContext } from "../UserContext";

export function ArtistTopTracksCard({ props }) {
  const { setAnUri, setPlay } = useContext(UserContext);

  const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const inMinutes = millisToMinutesAndSeconds(props.duration_ms);
  return (
    <div
      className="top__track--container"
      onClick={() => {
        setAnUri(props.uri);
        setPlay(true);
      }}
    >
      <div className="top__track_title_image--container">
        <div
          className="track__cover--container"
          onClick={() => {
            setAnUri(props.uri);
            setPlay(true);
          }}
        >
          <img src={props.album.images[0].url} alt="cover" />
        </div>

        <h4
          className="top__track--title"
          onClick={() => {
            setAnUri(props.uri);
            setPlay(true);
          }}
        >
          {props.name}
        </h4>
      </div>
      <div className="top__track--details">
        <h4 className="top__tarck--popularity">{props.popularity}</h4>
        <div className="top__track--actions">
          <FiHeart />
          <FiPlay />
        </div>
        <h4 className="top__track--duration">{inMinutes}</h4>
      </div>
    </div>
  );
}

export default ArtistTopTracksCard;
