import React from 'react';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Player from "../components/Player";
import PlayListCard from "../components/Card";

import "../styles/App.css"

export const PlayList = () => {



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
                                <PlayListCard
                                    key={playlist.id}
                                    props={playlist} />
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