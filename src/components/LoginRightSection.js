import { React, useContext, useEffect, useState } from 'react';

import { FcGoogle } from "react-icons/fc";

import { FaSpotify } from "react-icons/fa"
import { UserContext } from '../UserContext';



export const LoginRightSection = ({ newUser, setNewUser }) => {


    const { user, login, handleLogin, logout } = useContext(UserContext);
    return (
        <>
            <div>

                <div>

                    <div>
                        <button
                            onClick={handleLogin}
                        >
                            <FaSpotify />Continuez avec Spotify
                        </button>
                        <button
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default LoginRightSection