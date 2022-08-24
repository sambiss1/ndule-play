/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
import { React, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import LoadingData from "../components/LoadingData";
import GenresCard from "../components/GenreCard";

import "../styles/homepage.css";
import "../styles/App.css";
import "../styles/albumitem.css";


export const Genres = () => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(window.localStorage.getItem("token"));

    const [category, setCategory] = useState([]);

    const getAllCategory = async () => {
        try {
            const getCategories = await spotifyApi.getCategories();

            setCategory(getCategories.categories.items);
            localStorage.setItem(
                "categories",
                JSON.stringify(getCategories.categories.items)
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            getAllCategory();
        }, 500);
    }, []);
    return (
        <div className="homepage--container">
            <div className="main__container">
                <div className="page__content">
                    <h3 className="page__title">Genres Musicaux</h3>
                    {category.length <= 0 ? (
                        <LoadingData />
                    ) : (
                        <div className="card__tabs--panel">
                            {category.map(
                                (genre) =>
                                    genre.name + genre.icons[0] && (
                                        <GenresCard key={genre.id} props={genre} />
                                    )
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Genres;
