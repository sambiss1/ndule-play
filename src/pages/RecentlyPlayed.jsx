/* eslint-disable import/no-named-as-default */
import { React, useContext, useEffect } from "react";

import SpotifyWebApi from "spotify-web-api-js";

import RecentlyPlayedCard from "../components/RecentlyPlayedCard";

import LoadingData from "../components/LoadingData";
// import SearchResult from "../components/SearchResult";

import "../styles/App.css";
import "../styles/albumitem.css";
import { UserContext } from "../UserContext";

export function RecentlyPlayed() {

    const { recentlyPlayed, getRecentlyPlayed } = useContext(UserContext);


    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(window.localStorage.getItem("token"));




    useEffect(() => {
        setTimeout(() => {
            getRecentlyPlayed();
        }, 500);
    }, []);

    return (
        <div className="homepage--container">

            <div className="main__container">

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

            </div>

        </div>
    );
}

export default RecentlyPlayed;
