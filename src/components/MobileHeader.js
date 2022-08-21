import React, { useState } from 'react';
import { MdHistory } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import LogoContainer from './LogoContainer';

export const MobileHeader = () => {
    const [activeLink, setIsActive] = useState("active")

    const [noActiveLink, setNotActiveLink] = useState("no__active")
    return (
        <div
            className='mobile__header--container'
        >
            <LogoContainer />
            <NavLink
                to="/recently-played"
                className={({ isActive }) =>
                    isActive ? activeLink : noActiveLink
                }
            >
                <MdHistory
                    className="sidebar__menu--icon"
                />
            </NavLink>
        </div>
    )
}

export default MobileHeader