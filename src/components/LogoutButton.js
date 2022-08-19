import { React, useContext } from 'react';
import { BiLogOut } from "react-icons/bi";
import { UserContext } from '../UserContext';

import "../styles/navigationmenu.css";

export const LogoutButton = ({ logout }) => {
    // const { logout } = useContext(UserContext)


    return (
        <div
            className="logout__button"
            onClick={logout}
        >
            <BiLogOut
                className="logout__button--icon"

            />
            <span>Déconnexion</span>

        </div>
    )
}

export default LogoutButton