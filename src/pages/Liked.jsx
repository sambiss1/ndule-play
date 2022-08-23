/* eslint-disable import/no-named-as-default */
import { React, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import LikedSongCard from "../components/LikedSongCard";
import LoadingData from "../components/LoadingData";
import "../styles/App.css";
import "../styles/albumitem.css";

export function Liked() {
  const [userLikedSongs, setUserLikedSongs] = useState([]);

  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(window.localStorage.getItem("token"));

  const getUserLikedSongs = async () => {
    try {
      const likedSongs = await spotifyApi.getMySavedTracks();
      setUserLikedSongs(likedSongs.items);
      localStorage.setItem(
        "user__liked__songs",
        JSON.stringify(likedSongs.items)
      );
    } catch (error) {
      console.log(error);
    }
  };

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

          {userLikedSongs.length <= 0 ? (
            <LoadingData />
          ) : (
            <div className="card__tabs--panel">
              {userLikedSongs.map(
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
