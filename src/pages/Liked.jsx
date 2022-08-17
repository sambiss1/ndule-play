import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Player from "../components/Player";
import LikedSongCard from '../components/LikedSongCard';


import "../styles/App.css";
import "../styles/albumitem.css"

export const Liked = () => {
    console.log(JSON.parse(localStorage.getItem("user__liked__songs")))

    let myLikedSong = JSON.parse(localStorage.getItem("user__liked__songs"))
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
                                key={song.id}
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