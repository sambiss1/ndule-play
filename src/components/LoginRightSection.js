import { React, useContext, useEffect, useState } from 'react';

import { FcGoogle } from "react-icons/fc"

import { UserContext } from '../UserContext';



export const LoginRightSection = ({ newUser, setNewUser }) => {


    const { user, login, handleLogin, logout } = useContext(UserContext);
    return (
        <>
            <div>
                LoginRightSection
                <div>

                    <div>
                        <button
                            onClick={handleLogin}
                        >
                            Login
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