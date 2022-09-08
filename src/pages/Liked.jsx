/* eslint-disable import/no-named-as-default */
import { React, useContext, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import LikedSongCard from "../components/LikedSongCard";
import LoadingData from "../components/LoadingData";
import "../styles/App.css";
import "../styles/albumitem.css";
import { UserContext } from "../UserContext";

export function Liked() {
  const { likedSong, getUserLikedSongs } = useContext(UserContext);

  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(window.localStorage.getItem("token"));

  useEffect(() => {
    setTimeout(() => {
      getUserLikedSongs();
    }, 500);
  }, []);

  return (
    <div className="homepage--container">
      <div className="main__container">
        <div className="page__content">
          <h3 className="page__title">Titres</h3>

          {likedSong.length <= 0 ? (
            <LoadingData />
          ) : (
            <div className="card__tabs--panel">
              {likedSong.map(
                (song) =>
                  song.track.name +
                    song.track.artist +
                    song.track.album.images[0].url && (
                    <LikedSongCard key={song.track.id} props={song} />
                  )
              )}{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Liked;
