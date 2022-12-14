/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useContext } from "react";
import "../styles/albumitem.css";
import { Link } from "react-router-dom";
import { FiPlay } from "react-icons/fi";
import { UserContext } from "../UserContext";

export function LikedSongCard({ props }) {
  let allArtistsInSong = props.track.artists.map((name) => name.name);

  if (allArtistsInSong.length > 1) {
    allArtistsInSong = props.track.artists.map((name) => `${name.name}, `);
  } else {
    allArtistsInSong = props.track.artists.map((name) => `${name.name}`);
  }

  const { setAnUri, setPlay, anUri } = useContext(UserContext);

  return (
    <div className="card__item--container" key={props.id}>
      <Link to={`/album/${props.track.album.id}`} className="track__link">
        <div className="card__image--container">
          <img src={props.track.album.images[0].url} alt="artits" />
        </div>
      </Link>
      <div
        className="play__icon--container"
        onClick={() => {
          console.log("play", props.track.uri);

          setAnUri(props.track.uri);
          setPlay(true);
        }}
      >
        {anUri === props.track.uri ? (
          <div className="spinner">
            <div className="r1" />
            <div className="r2" />
            <div className="r3" />
            <div className="r4" />
            <div className="r5" />
          </div>
        ) : (
          <FiPlay className="play__icon" />
        )}
      </div>

      <h4 className="album__name">{props.track.name}</h4>{" "}
      <Link to={`/artist/${props.track.artists[0].id}`}>
        <h4 className="card__name">{props.track.artists[0].name}</h4>
      </Link>



    </div>
  );
}
export default LikedSongCard;
