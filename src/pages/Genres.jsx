import { React, useContext } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import MainContainer from '../components/MainContainer';
import Container from "../components/MainContainer";

import GenresCard from "../components/GenreCard"

import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

import "../styles/homepage.css";
import "../styles/App.css";
import "../styles/albumitem.css";

export const Genres = ({ genre }) => {
    const { logout, getAllCategory } = useContext(UserContext);

    const navigate = useNavigate();

    getAllCategory()


    let genres = JSON.parse(localStorage.getItem("categories"))
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
                    >Genres Musicaux</h3>

                    <div
                        className="card__tabs--panel"
                    >
                        {genres.map(genre => genre.name + genre.icons[0] &&
                            <GenresCard
                                key={genre.id}
                                props={genre}
                            />
                        )

                        }
                    </div>
                </div>

                <Player />
            </div>

        </div>
    )
}

export default Genres