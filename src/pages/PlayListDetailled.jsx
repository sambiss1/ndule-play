/* eslint-disable import/no-named-as-default */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import LoadingData from "../components/LoadingData";
import PlayListTrackCard from "../components/PlayListTrackCard";


import "../styles/App.css";
import "../styles/singleplaylist.css";

const PlayListDetailled = () => {
    const { id } = useParams();
    const [thisPlalist, setThisPlaylist] = useState([]);
    const spotifyApi = new SpotifyWebApi();

    spotifyApi.setAccessToken(window.localStorage.getItem("token"));

    const getPlaylistContent = async () => {
        try {
            const getThisPlaylist = await spotifyApi.getPlaylist(id);


            setThisPlaylist(getThisPlaylist);
            console.log(thisPlalist.tracks.items.map(track => track.track.artists[0].name));

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getPlaylistContent();
        }, 300);
    }, []);

    // console.log(thisPlalist.tracks.items);
    return (
        <div
            className="main__container"
        >
            {thisPlalist.length <= 0 ? (<LoadingData />) : (
                <div className="page__content">

                    <div className="playlist__cover--container">
                        <div
                            className="cover__image--container"
                        >
                            <img src={thisPlalist.images[0].url} alt="playlist cover" />
                        </div>
                        <div className="cover__details--container">

                            <h3>PlayList</h3>
                            <h3
                                className="cover__details__name"
                            >{thisPlalist.name}</h3>
                        </div>
                    </div>
                    <div>
                        <h3>Titres</h3>
                    </div>
                    <div>
                        {thisPlalist.tracks.items.length <= 0 ? (<LoadingData />) :
                            (thisPlalist.tracks.items.map((playlistTrack) => playlistTrack &&
                                <PlayListTrackCard
                                    key={playlistTrack.id}
                                    props={playlistTrack}
                                />
                            ))
                        }
                    </div>
                </div>
            )
            }

        </div>
    );
};

export default PlayListDetailled