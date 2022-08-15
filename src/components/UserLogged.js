import { React, useContext } from 'react';

import UserTest from "../images/user-test.png";

import { FiChevronDown } from "react-icons/fi"


import "../styles/userlogged.css"

export const UserLogged = () => {
    return (
        <div
            className="userlooged--container"
        >
            <div
                className="usertest__image--container"
            >
                <img
                    src={UserTest}
                    alt="user avatar"
                    className="usertest__image--avatar"
                />
            </div>

            <div>
                <h2>Sam Bisselele</h2>
            </div>
            <div>
                <FiChevronDown 
                    className="chevron__dropdown"

                />
            </div>
        </div>
    )
}

export default UserLogged