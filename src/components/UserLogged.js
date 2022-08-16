import { React, useContext } from 'react';

import UserTest from "../images/user-test.png";

import { FiChevronDown } from "react-icons/fi";


import { UserContext } from '../UserContext';


import "../styles/userlogged.css"

export const UserLogged = () => {

    const { user, username } = useContext(UserContext)
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
                <h2>{localStorage.getItem("logged__user")}</h2>
            </div>

        </div>
    )
}

export default UserLogged