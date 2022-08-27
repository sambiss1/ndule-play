/* eslint-disable import/no-named-as-default */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext } from "react";
import SearchResult from "../components/SearchResult";

import "../styles/App.css";
import { UserContext } from "../UserContext";
import LoadingData from "../components/LoadingData";

const SearchPage = () => {
  const { search, termSearched, cursor } = useContext(UserContext);
  return (
    <div>
      <div className="main__container" style={{ cursor: `${cursor}` }}>
        {search ? (
          <div className="page__content">
            <h4>Recherche récente</h4>
            {termSearched.length === "" ? <LoadingData /> : <SearchResult />}
          </div>
        ) : (
          <LoadingData />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
