import { React, useState, useEffect, useContext } from 'react';
import { IoSearchOutline } from "react-icons/io5";

import "../styles/searchbar.css";
import SpotifyWebApi from 'spotify-web-api-js';
import LoadingData from './LoadingData';
import { UserContext } from '../UserContext';


export const BestResult = () => {
    return (
        <>
            <h1>Best Result</h1>
        </>
    )
}

export const SearchBar = () => {

    let spotify = new SpotifyWebApi();
    spotify.setAccessToken(window.localStorage.getItem("token"))

    const { search, artistSearched, term, setTerm, searchArtist } = useContext(UserContext)

    return (
        <>
            <form onSubmit={searchArtist}>
                <div
                    className="search__input--container"
                >
                    <IoSearchOutline
                        className='search__bar--icon'
                    />
                    <input
                        type="search"
                        placeholder="Rechercher ici"
                        name="search__bar--input"
                        onChange={(event) => setTerm(event.target.value)}
                    />

                    <input
                        type="submit"
                        value="Rechercher"
                        className="search__bar--button"
                    />
                </div>

            </form>

        </>
    )
}

export default SearchBar