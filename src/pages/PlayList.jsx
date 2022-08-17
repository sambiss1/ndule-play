import React from 'react';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Player from "../components/Player";
import PlayListCard from "../components/Card";
import { useNavigate } from 'react-router-dom';
import "../styles/App.css";

export const PlayList = () => {
    const navigate = useNavigate();

    let userPlaylists = JSON.parse(localStorage.getItem("user__playlist"))
    return (
        <>
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