/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { React, useContext } from "react";

import "../styles/App.css";
import "../styles/singlealbum.css";
import { FiPlay, FiHeart } from "react-icons/fi";
import { UserContext } from "../UserContext";

export function AlbumTrack({ props }) {
  const { millisToMinutesAndSeconds, setTrackUri } = useContext(UserContext);

  const trackDurationInMinutes = millisToMinutesAndSeconds(props.duration_ms);

  const getTrackId = () => {
    console.log(props.uri);
    setTrackUri(props.uri);
  };

  return (
    <div className="album__track--container">
      <h4 onClick={getTrackId}>{props.track_number}</h4>
      <div className="album__track--details">
        <h4 className="album__track--title">{props.name}</h4>

        {props.artists > 1 ? (
          props.artists.map(
            (artist) =>
              `${artist.name}, ` && (
                <h4 className="album__track--artists">{artist.name}</h4>
              )
          )
        ) : (
          <h4 className="album__track--artists">{props.artists[0].name}</h4>
        )}
      </div>
      <div className="album__track__actions--container">
        <FiPlay className="album__track__actions--play" />
        <FiHeart className="album__track__actions--like" />
      </div>
      <div className="album__track__duration--container">
        <h4 className="album__track__duration__text">
          {trackDurationInMinutes}
        </h4>
      </div>
    </div>
  );
}

export default AlbumTrack;
