import { React, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineMusicVideo, MdHistory } from "react-icons/md";
import { TbPlaylist, TbMusic } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";

import { NavLink } from "react-router-dom";

import "../styles/navigationmenu.css";

export function NavigationMenu() {
  // eslint-disable-next-line no-unused-vars
  const [activeLink, setIsActive] = useState("active");

  // eslint-disable-next-line no-unused-vars
  const [noActiveLink, setNotActiveLink] = useState("no__active");

  return (
    <nav className="navigation__menu--container">
      <ul>
        <li
        // className={isActive}
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : noActiveLink)}
          >
            <BiHomeAlt className="sidebar__menu--icon" /> <span>Accueil</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/albums"
            className={({ isActive }) => (isActive ? activeLink : noActiveLink)}
          >
            <MdOutlineMusicVideo className="sidebar__menu--icon" />
            <span>Albums</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playlist"
            className={({ isActive }) => (isActive ? activeLink : noActiveLink)}
          >
            <TbPlaylist className="sidebar__menu--icon" />
            <span>Playlists</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/genres"
            className={({ isActive }) => (isActive ? activeLink : noActiveLink)}
          >
            <TbMusic className="sidebar__menu--icon" />
            <span>Genres</span>
          </NavLink>
        </li>
      </ul>

      <hr />
      <ul>
        <li>
          <NavLink
            to="/recently-played"
            className={({ isActive }) => (isActive ? activeLink : noActiveLink)}
          >
            <MdHistory className="sidebar__menu--icon" />
            <span>Joués récemments</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/liked"
            className={({ isActive }) => (isActive ? activeLink : noActiveLink)}
          >
            <FiHeart className="sidebar__menu--icon" />
            <span>Favoris</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
