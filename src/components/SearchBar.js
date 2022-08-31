/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-const-assign */
import { React, useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import "../styles/searchbar.css";
import { UserContext } from "../UserContext";
import spotifyApi from "../utils";

export const BestResult = () => {
  <h1>Best Result</h1>;
};

export function SearchBar() {
  const navigate = useNavigate();

  const { term, setTerm, setTermSearched, setIsSearching } = useContext(UserContext);


  const searchitem = (event) => {
    event.preventDefault();
    window.location.pathname !== "/search"
      ? navigate("/search", { replace: true })
      : term === "";
    setIsSearching(false);

    setTimeout(() => {
      const searchResult = spotifyApi.search(term, ["track", "artist", "album", "playlist"]);
      searchResult
        .then((result) => setTermSearched(result))
        .then(() => setIsSearching(true));
    }, 200);

  };

  return (
    <form onSubmit={searchitem} className="desktop__search--form">
      <div className="search__input--container">
        <IoSearchOutline className="search__bar--icon" />
        <input
          type="search"
          placeholder="Rechercher ici"
          name="search__bar--input"
          // value={term}
          // onClick={() => {
          //   window.location.pathname !== "/search"
          //     ? navigate("/search", { replace: true })
          //     : window.location("/search");
          // }}
          onChange={(event) => {
            setTerm(event.target.value);
            searchitem();
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
