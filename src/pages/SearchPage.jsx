/* eslint-disable import/no-named-as-default */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext } from "react";
import SearchResult from "../components/SearchResult";

import "../styles/App.css";
import { UserContext } from "../UserContext";
import LoadingData from "../components/LoadingData";

const SearchPage = () => {

  const { search, termSearched } = useContext(UserContext);
  return (

    <div
      className="main__container"
    >
      {search ? (
        <div className="page__content">
          <h4>Search result</h4>
          {termSearched.length <= 0 ? <LoadingData /> : <SearchResult />}
        </div>
      ) : (
        <div className="page__content">

          <h4>Search result</h4>
        </div>
      )}
    </div>);
};

export default SearchPage;
