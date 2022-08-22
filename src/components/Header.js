/* eslint-disable import/no-named-as-default */
import React from "react";
import SearchBar from "./SearchBar";
import UserLogged from "./UserLogged";

import "../styles/header.css";

export function Header() {
  return (
    <div className="header--container">
      <SearchBar />
      {/* <ThemeToggler /> */}
      <UserLogged />
    </div>
  );
}

export default Header;
