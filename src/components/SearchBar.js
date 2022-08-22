/* eslint-disable no-unused-expressions */
/* eslint-disable no-const-assign */
import { React, useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";

import "../styles/searchbar.css";
import SpotifyWebApi from "spotify-web-api-js";
import { UserContext } from "../UserContext";

export const BestResult = () => {
    <h1>Best Result</h1>;
};

export function SearchBar() {
    const spotify = new SpotifyWebApi();
    spotify.setAccessToken(window.localStorage.getItem("token"));

    const { setTerm, searchArtist, setSearch } = useContext(UserContext);

    return (
        <form onSubmit={searchArtist}>
            <div className="search__input--container">
                <IoSearchOutline className="search__bar--icon" />
                <input
                    type="search"
                    placeholder="Rechercher ici"
                    name="search__bar--input"
                    onChange={(event) => {
                        event.target.value === "" ? setSearch(false) : setTerm(event.target.value);
                    }}
                />

                <input
                    type="submit"
                    value="Rechercher"
                    className="search__bar--button"
                />
            </div>
        </form>
    );
}

export default SearchBar;
