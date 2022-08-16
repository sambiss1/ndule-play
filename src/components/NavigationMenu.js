import { React, useState, useContext } from 'react';
import { BiHomeAlt, BiLogOut } from "react-icons/bi";
import { MdOutlineMusicVideo, MdHistory } from "react-icons/md";
import { TbPlaylist, TbMusic } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";


import "../styles/navigationmenu.css";

import { UserContext } from "../UserContext"

export const NavigationMenu = ({ className }) => {
    const [isActive, setIsActive] = useState("active")

    const { logout } = useContext(UserContext)

    return (
        <>
            <nav
                className='navigation__menu--container'
            >

                <ul>
                    <li
                        className={`${isActive}`}
                    ><BiHomeAlt /> <span>Accueil</span></li>
                    <li><MdOutlineMusicVideo /><span>Albums</span></li>
                    <li><TbPlaylist /><span>Playlists</span></li>
                    <li><TbMusic /><span>Genres</span></li>

                </ul>

                <hr />
                <ul>
                    <li><MdHistory /><span>Joués récemments</span></li>
                    <li><FiHeart /><span>Favoris</span></li>
                </ul>

            </nav>


        </>
    )
}

export default NavigationMenu