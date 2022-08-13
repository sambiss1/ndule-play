import { React, useContext, useEffect, useState } from 'react';

import { FcGoogle } from "react-icons/fc"

import { UserContext } from '../UserContext';



export const LoginRightSection = ({ newUser, setNewUser }) => {


    const { user, login, handleLogin } = useContext(UserContext);
    return (
        <>
            <div>
                LoginRightSection
                <div>
                    {/* <button>
                        {!token ?
                            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                                to Spotify</a>
                            : <button onClick={logout}>Logout</button>}

                    </button> */}
                    <div>
                        <button
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default LoginRightSection