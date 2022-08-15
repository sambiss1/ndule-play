import React from 'react';
import SearchBar from './SearchBar';
import ThemeToggler from './ThemeToggler';
import UserLogged from './UserLogged';

import "../styles/header.css"


export const Header = () => {
    return (
        <div
            className="header--container"
        >
            <SearchBar />
            {/* <ThemeToggler /> */}
            <UserLogged />

        </div>
    )
}

export default Header