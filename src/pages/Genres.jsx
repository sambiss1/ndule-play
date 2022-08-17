import { React, useContext } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import MainContainer from '../components/MainContainer';
import Container from "../components/MainContainer";

import { UserContext } from '../UserContext';

import "../styles/homepage.css";
import "../styles/App.css"

export const Genres = () => {
    const { logout } = useContext(UserContext)
    return (
        <div
            className="homepage--container"
        >

            <Sidebar />
            <div
                className="main__container"
            >
                <Header />

                <h2>Tous les genres sont ici</h2>
                <Player />
            </div>

        </div>
    )
}

export default Genres