import { React, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Player from "../components/Player";
import { UserContext } from "../UserContext";

import "../styles/App.css"

export const Albums = () => {
    return (
        <
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
                    >
                        Albums
                    </h3>
                </div>
                <Player />

            </div>
        </>
    )
}

export default Albums