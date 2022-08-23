/* eslint-disable import/no-named-as-default */
import React, { useState } from "react";
import { MdHistory } from "react-icons/md";
import { NavLink } from "react-router-dom";

import "../styles/header.css";
import LogoContainer from "./LogoContainer";

export function MobileHeader() {
  // eslint-disable-next-line no-unused-vars
  const [activeLink, setIsActive] = useState("active");

  // eslint-disable-next-line no-unused-vars
  const [noActiveLink, setNotActiveLink] = useState("no__active");
  return (
    <div className="mobile__header--container">
      <LogoContainer />
      <NavLink
        to="/recently-played"
        className={({ isActive }) => (isActive ? activeLink : noActiveLink)}
      >
        <MdHistory className="sidebar__menu--icon" />
      </NavLink>
    </div>
  );
}

export default MobileHeader;
