/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
import { React } from "react";

import AlbumItem from "./AlbumItem";

import "../styles/albumitem.css";

export const AlbumsTabs = () => {
  const myTopArtists = JSON.parse(localStorage.getItem("my_top_artist"));
  const newReleaseAlbum = JSON.parse(localStorage.getItem("new-release-album"));

  return (
    <div className="album__tabs--container">
      <div>
        <h3>Nouveautés</h3>
      </div>
      <div className="card__tabs--panel">
        {newReleaseAlbum.map(
          (newalbum) =>
            newalbum.name +
              newalbum.artists[0].name +
              newalbum.images[0].url && (
              <AlbumItem key={newalbum.id} newalbum={newalbum} />
            )
        )}
      </div>
    </div>
  );
};

export default AlbumsTabs;
