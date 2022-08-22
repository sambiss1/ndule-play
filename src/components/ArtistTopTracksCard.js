/* eslint-disable react/prop-types */
import React from "react";
import { FiHeart, FiPlay } from "react-icons/fi";

import "../styles/artisttoptracks.css";

export function ArtistTopTracksCard({ props }) {
  const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const inMinutes = millisToMinutesAndSeconds(props.duration_ms);
  return (
    <div className="top__track--container">
      <div className="top__track_title_image--container">
        <div className="track__cover--container">
          <img src={props.album.images[0].url} alt="cover" />
        </div>

        <h4 className="top__track--title">{props.name}</h4>
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
