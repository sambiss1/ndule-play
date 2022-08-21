import React from 'react';

import ActiveMusicImage from "../images/cover-LHDMA.jpg";

import "../styles/player.css";
import SpotifyPlayer from 'react-spotify-web-playback';
import SpotifyWebApi from 'spotify-web-api-js';


export const Player = () => {
    let spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(window.localStorage.getItem("token"));
    let user_token = 0;
    return (
        <div
            className="music__player--container"
        >
            <SpotifyPlayer
                token={window.localStorage.getItem('token')}

            />
            {/* <div
                className="active__music__image--container"
            >
                <img
                    src={ActiveMusicImage}
                    alt="cover active music"
                />
            </div>
            <div
                className="active__music--artist"
            >
                <h3
                    className="music__artist--author"
                >
                    Laylow
                </h3>
                <h3
                    className="music__artist--title"
                >
                    Une histoire étrange
                </h3>
            </div>

            <div
                className="active__music__player--container"
            >
                <audio />
            </div> */}




        </div>
    )
}

export default Player