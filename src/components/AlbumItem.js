/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { FiPlay } from "react-icons/fi";
import { UserContext } from "../UserContext";

export function AlbumItem({ newalbum }) {
  const { setAnUri, setPlay, anUri } = useContext(UserContext);

  return (
    <div className="card__item--container" key={newalbum.id}>
      <Link to={`/album/${newalbum.id}`} className="track__link">
        <div className="card__image--container">
          <img src={newalbum.images[0].url} alt="artits" />
        </div>
      </Link>
      <div
        className="play__icon--container"
        onClick={() => {
          setAnUri(newalbum.uri);
          setPlay(true);
        }}
      >
        {anUri === newalbum.uri ? (
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

      <Link to={`/artist/${newalbum.artists[0].id}`}>
        <h4 className="card__name">{newalbum.artists[0].name}</h4>
      </Link>
      <Link to={`/album/${newalbum.id}`} className="track__link">
        <h4 className="album__name">{newalbum.name}</h4>
      </Link>
    </div>
  );
}

export default AlbumItem;
