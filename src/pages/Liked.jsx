import { React, useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Player from "../components/Player";
import LikedSongCard from '../components/LikedSongCard';
import { UserContext } from "../UserContext";
import { useNavigate } from 'react-router-dom';
import LoadingData from '../components/LoadingData';
import SpotifyWebApi from 'spotify-web-api-js';



import "../styles/App.css";
import "../styles/albumitem.css"

export const Liked = () => {
    const [userLikedSongs, setUserLikedSongs] = useState([]);

    let spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(window.localStorage.getItem("token"))

    const getUserLikedSongs = async () => {
        try {
            const likedSongs = await spotifyApi.getMySavedTracks()
            setUserLikedSongs(likedSongs.items)
            localStorage.setItem("user__liked__songs", JSON.stringify(likedSongs.items))
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getUserLikedSongs()
        }, 500)
    }, [])



    const navigate = useNavigate();
    return (
        <div
            className="homepage--container"
        >
            <Sidebar logout={() => navigate("/login")} />
            <div
                className="main__container"
            >
                <Header />

                <div
                    className="page__content"
                >
                    <h3
                        className="page__title"
                    >Titres</h3>

                    {userLikedSongs.length <= 0 ? (<LoadingData />) :

                        (<div
                            className="card__tabs--panel"
                        >
                            {userLikedSongs.map(song => song.track.name + song.track.artist + song.track.album.images[0].url
                                &&
                                <LikedSongCard
                                    key={song.track.id}
                                    props={song}

                                />
                            )} </div>)
                    }




                </div>

                <Player />
            </div>

        </div>
    )
}

export default Liked