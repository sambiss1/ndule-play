import { React, useState } from 'react'
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineMusicVideo, MdHistory } from "react-icons/md";
import { TbPlaylist, TbMusic } from "react-icons/tb";
import { FiHeart } from "react-icons/fi"

import TrackList from "../images/playlist-icon.svg"
import "../styles/navigationmenu.css"

export const NavigationMenu = ({ className }) => {
    const [isActive, setIsActive] = useState("active")


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
                    <li><TbPlaylist /><span>Pistes</span></li>
                    <li><TbMusic /><span>Genres</span></li>

                </ul>

            </nav>
            <nav
                className="library__menu--container"
            >
                <h2>Libraire</h2>
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