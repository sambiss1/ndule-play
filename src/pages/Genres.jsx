import { React, useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';

import LoadingData from '../components/LoadingData';
import GenresCard from "../components/GenreCard"

import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';

import "../styles/homepage.css";
import "../styles/App.css";
import "../styles/albumitem.css";

export const Genres = ({ genre }) => {
    const { logout, } = useContext(UserContext);

    let spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(window.localStorage.getItem("token"))

    const [category, setCategory] = useState([])

    const getAllCategory = async () => {
        try {
            const getCategories = await spotifyApi.getCategories()

            setCategory(getCategories.categories.items)
            localStorage.setItem('categories', JSON.stringify(getCategories.categories.items))
        }
        catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            getAllCategory()
        }, 500)
    }, [])

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
                    >Genres Musicaux</h3>
                    {category.length <= 0 ? (<LoadingData />) : (
                        <div
                            className="card__tabs--panel"
                        >
                            {category.map(genre => genre.name + genre.icons[0] &&
                                <GenresCard
                                    key={genre.id}
                                    props={genre}
                                />
                            )

                            }
                        </div>
                    )}

                </div>

                <Player />
            </div>

        </div>
    )
}

export default Genres