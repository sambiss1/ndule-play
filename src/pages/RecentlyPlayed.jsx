/* eslint-disable import/no-named-as-default */
import { React, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Player from "../components/Player";
import { UserContext } from "../UserContext";
import RecentlyPlayedCard from "../components/RecentlyPlayedCard";

import LoadingData from "../components/LoadingData";
import SearchResult from "../components/SearchResult";

import "../styles/App.css";
import "../styles/albumitem.css";

export function RecentlyPlayed() {
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const { search, artistSearched } = useContext(UserContext);

  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(window.localStorage.getItem("token"));
  const getRecentlyPlayed = async () => {
    try {
      const recentPlayed = await spotifyApi.getMyRecentlyPlayedTracks();
      localStorage.setItem(
        "user__recently__played",
        JSON.stringify(recentPlayed.items)
      );
      setRecentlyPlayed(recentPlayed.items);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      getRecentlyPlayed();
    }, 500);
  }, []);

  return (
    <div className="homepage--container">
      <Sidebar logout={() => navigate("/login")} />
      <div className="main__container">
        <Header />
        {search ? (
          <div className="page__content">
            {artistSearched.length <= 0 ? <LoadingData /> : <SearchResult />}
          </div>
        ) : (
          <div className="page__content">
            <h3 className="page__title">Joués récemments</h3>
            {recentlyPlayed.length <= 0 ? (
              <LoadingData />
            ) : (
              <div className="card__tabs--panel">
                {recentlyPlayed.map(
                  (song) =>
                    song.track.name +
                      song.track.artist +
                      song.track.album.images[0].url && (
                      <RecentlyPlayedCard key={song.track.id} props={song} />
                    )
                )}
              </div>
            )}
          </div>
        )}

        <Player />
      </div>
    </div>
  );
}

export default RecentlyPlayed;
