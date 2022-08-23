/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useContext, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { TbPlaylist } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";


import "../styles/navigationmenu.css";
import { UserContext } from "../UserContext";

export const MobileNavigation = () => {
    const { logout } = useContext(UserContext);
    // eslint-disable-next-line no-unused-vars
    const [activeLink, setIsActive] = useState("active");

    // eslint-disable-next-line no-unused-vars
    const [noActiveLink, setNotActiveLink] = useState("no__active");
    return (
        <nav
            className="mobile__naigation--container"
        >
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? activeLink : noActiveLink)}
                    >
                        <BiHomeAlt className="sidebar__menu--icon" />
                        <br /><span>Accueil</span>
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
                        to="/liked"
                        className={({ isActive }) => (isActive ? activeLink : noActiveLink)}
                    >
                        <FiHeart className="sidebar__menu--icon" />
                        <span>Favoris</span>
                    </NavLink>
                </li>
                <li>
                    <div
                        className="logout__item"
                        onClick={() => {
                            // <Navigate to="/login" replace={true} />;
                            window.location.replace("/");
                            logout();
                        }}
                    >
                        <IoIosLogOut className="sidebar__menu--icon" />
                        <span>Déconnexion</span>
                    </div>

                </li>

            </ul>

        </nav>
    );
};

export default MobileNavigation;