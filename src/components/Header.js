import React from 'react';
import SearchBar from './SearchBar';
import ThemeToggler from './ThemeToggler';
import User from './User';

import "../styles/header.css"


export const Header = () => {
    return (
        <div
            className="header--container"
        >
            <SearchBar />
            <ThemeToggler />
            <User />

        </div>
    )
}

export default Header