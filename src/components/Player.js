import React, { useContext } from 'react';

import ActiveMusicImage from "../images/cover-LHDMA.jpg";

import "../styles/player.css";
import SpotifyPlayer from 'react-spotify-web-playback';
import SpotifyWebApi from 'spotify-web-api-js';
import { UserContext } from '../UserContext';


export const Player = () => {
    let spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(window.localStorage.getItem("token"));
    const { setAlbumUri, albumUri, trackUri } = useContext(UserContext)

    console.log(albumUri)
    let user_token = 0;
    return (
        <div
            className="music__player--container"
        >
            <SpotifyPlayer
                token={window.localStorage.getItem('token')}
                uris={[trackUri]}
                styles={{
                    activeColor: '#fff',
                    bgColor: '#333',
                    color: '#fff',
                    loaderColor: '#fff',
                    sliderColor: '#1cb954',
                    trackArtistColor: '#ccc',
                    trackNameColor: '#fff',
                }}

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