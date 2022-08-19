import { React, useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";

import "../styles/searchbar.css";
import SpotifyWebApi from 'spotify-web-api-js';
import LoadingData from './LoadingData';


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
    const [artistSearched, setArtistSearched] = useState([])
    const [term, setTerm] = useState("")
    const [search, setSearch] = useState(false)

    const searchArtist = async (event) => {
        event.preventDefault()

        const searchForArtist = await spotify.search(term, ["album", "artist", "playlist", "track"])
        console.log(searchForArtist)
        setArtistSearched(searchForArtist.artists)
        console.log(searchForArtist.artists.items[0])
        setSearch(true)

    }

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