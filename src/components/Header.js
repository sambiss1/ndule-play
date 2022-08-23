/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-named-as-default */
import React from "react";
import SearchBar from "./SearchBar";
import UserLogged from "./UserLogged";

import "../styles/header.css";

export const Header = () => {
  return (
    <div className="header--container">
      <SearchBar />

      <UserLogged />
    </div>
  );
};

export default Header;
