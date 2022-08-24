/* eslint-disable import/no-named-as-default */
import { React, useEffect, useState, useContext } from "react";

import SpotifyWebApi from "spotify-web-api-js";


import PlayListCard from "../components/Card";
import { UserContext } from "../UserContext";
import LoadingData from "../components/LoadingData";
import "../styles/App.css";

export function PlayList() {
  const { userID } = useContext(UserContext);
  const [userPlayList, setUserPlayList] = useState([]);

  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(window.localStorage.getItem("token"));

  const getUserPlaylist = async () => {
    try {
      const getMyPlaylist = await spotifyApi.getUserPlaylists({ userID });
      setUserPlayList(getMyPlaylist.items);
      localStorage.setItem(
        "user__playlist",
        JSON.stringify(getMyPlaylist.items)
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getUserPlaylist();
    }, 500);
  }, []);

  console.log(userPlayList);
  return (

    <div className="main__container">


      {userPlayList.length <= 0 ? (
        <LoadingData />
      ) : (
        <div className="page__content">
          <h3 className="page__title">Playlist</h3>
          <p>Spécialement pour vous </p>
          <div className="card__tabs--panel">
            {userPlayList.map(
              (playlist) =>
                playlist.name + playlist.image && (
                  <PlayListCard key={playlist.id} props={playlist} />
                )
            )}
          </div>
        </div>
      )}

    </div>

  );
}

export default PlayList;
