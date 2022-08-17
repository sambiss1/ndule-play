import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Player from "../components/Player"


import "../styles/App.css"


export const RecentlyPlayed = () => {
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
                    >Joués récemments</h3>
                </div>

                <Player />
            </div>

        </div>
    )
}

export default RecentlyPlayed