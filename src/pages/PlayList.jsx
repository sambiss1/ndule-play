import React from 'react';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Player from "../components/Player";
import PlayListCard from "../components/PlayListCard";

import "../styles/App.css"

export const PlayList = ({ playlist }) => {

    console.log(JSON.parse(localStorage.getItem("user__playlist")))

    let userPlaylists = JSON.parse(localStorage.getItem("user__playlist"))
    return (
        <>
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
                    >Playlist</h3>
                    <p>Spécialement pour vous </p>
                    <div
                        className="card__tabs--panel"
                    >
                        {
                            userPlaylists.map(playlist => playlist.name + playlist.image &&
                                <PlayListCard playlist={playlist} />
                            )
                        }
                    </div>

                </div>



                <Player />
            </div>
        </>
    )
}

export default PlayList