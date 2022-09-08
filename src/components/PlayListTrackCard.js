/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { React, useContext } from "react";
import { FiHeart, FiPlay } from "react-icons/fi";
import { UserContext } from "../UserContext";

import "../styles/singleplaylist.css";

const PlayListTrackCard = ({ props }) => {
  const { setAnUri, setPlay, millisToMinutesAndSeconds } =
    useContext(UserContext);

  const inMinutes = millisToMinutesAndSeconds(props.track.duration_ms);
  return (
    <div
      key={props.track.id}
      className="playlist__track--container"
      onClick={() => {
        setAnUri(props.track.uri);
        setPlay(true);
      }}
    >
      <div className="playlist__track_title_image--container">
        <div className="track__cover--container">
          <img src={props.track.album.images[0].url} alt="cover" />
        </div>
        <div className="playlist__track--details">
          <h4 className="playlist__track--title">{props.track.name}</h4>
          <h4 className="playlist__track--artist">
            {props.track.artists[0].name}
          </h4>
        </div>
      </div>
      <div className="playlist__track--actions">
        <FiHeart />
        <FiPlay />
      </div>

      <h4 className="playlist__track--duration">{inMinutes}</h4>
    </div>
  );
};

export default PlayListTrackCard;
