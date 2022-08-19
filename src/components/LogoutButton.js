import { React, useContext } from 'react';
import { BiLogOut } from "react-icons/bi";
import { UserContext } from '../UserContext';

import "../styles/navigationmenu.css";
import { Navigate } from 'react-router-dom';

export const LogoutButton = () => {
    const { logout } = useContext(UserContext)


    return (
        <div
            className="logout__button"
            onClick={() => {
                //<Navigate to="/login" replace={true} />;
                window.location.replace("/")
                logout();
            }}
        >
            <BiLogOut
                className="logout__button--icon"

            />
            <span>Déconnexion</span>

        </div>
    )
}

export default LogoutButton