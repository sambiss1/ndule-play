/* eslint-disable no-unused-expressions */
/* eslint-disable no-const-assign */
import { React, useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import "../styles/searchbar.css";
import SpotifyWebApi from "spotify-web-api-js";
import { UserContext } from "../UserContext";

export const BestResult = () => {
  <h1>Best Result</h1>;
};

export function SearchBar() {
  const navigate = useNavigate();
  const spotify = new SpotifyWebApi();
  spotify.setAccessToken(window.localStorage.getItem("token"));

  const { term, setTerm, setCursor, searchItem } = useContext(UserContext);

  return (
    <form onSubmit={searchItem} className="desktop__search--form">
      <div className="search__input--container">
        <IoSearchOutline className="search__bar--icon" />
        <input
          type="search"
          placeholder="Rechercher ici"
          name="search__bar--input"
          value={term}
          onChange={(event) => {
            setTerm(event.target.value);
            setCursor("wait");
            window.location.pathname !== "/search"
              ? navigate("/search", { replace: true })
              : window.location("/search");
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
