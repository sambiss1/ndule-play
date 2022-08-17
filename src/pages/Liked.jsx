import { React, useContext, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Player from "../components/Player";
import LikedSongCard from '../components/LikedSongCard';
import { UserContext } from "../UserContext"


import "../styles/App.css";
import "../styles/albumitem.css"

export const Liked = () => {
    const { getUserLikedSongs } = useContext(UserContext)
    let myLikedSong = []
    useEffect(() => {
        getUserLikedSongs()

    }, [])

    myLikedSong = JSON.parse(localStorage.getItem("user__liked__songs"))
    return (
        <div
            className="homepage--container"
        >
            <Sidebar />
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
                    <div
                        className="card__tabs--panel"
                    >
                        {myLikedSong.map(song => song.track.name + song.track.artist + song.track.album.images[0].url
                            &&
                            <LikedSongCard
                                key={song.track.id}
                                props={song}

                            />
                        )}
                    </div>
                </div>

                <Player />
            </div>

        </div>
    )
}

export default Liked