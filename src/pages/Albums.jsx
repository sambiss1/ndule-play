import { React, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Player from "../components/Player";
import { UserContext } from "../UserContext";
import { useNavigate } from 'react-router-dom';

import "../styles/App.css"

export const Albums = () => {

    const navigate = useNavigate();
    return (
        <
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