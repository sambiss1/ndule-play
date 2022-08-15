import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

import "../styles/searchbar.css"

export const SearchBar = () => {
    return (
        <>
            <form>
                <div
                    className="search__input--container"
                >
                    <IoSearchOutline
                        className='search__bar--icon'
                    />
                    <input
                        type="search"
                        placeholder="Rechercher ici"
                        name="search__bar--input"
                    />

                    <input
                        type="submit"
                        value="Rechercher"
                        className="search__bar--button"
                    />
                </div>

            </form>

        </>
    )
}

export default SearchBar