import { React, useContext, useEffect, useState } from 'react';

import { FcGoogle } from "react-icons/fc"

import { UserContext } from '../UserContext';



export const LoginRightSection = () => {


    const { user, login } = useContext(UserContext);

    const [token, setToken] = useState("")





    const CLIENT_ID = "5aa0312dd868402aa4f2f05f91de64e1"//process.env.REACT_APP_CLIENT_ID;
    const REDIRECT_URI = "http://localhost:3000" //process.env.REACT_APP_REDIRECT_URI;
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"  //process.env.REACT_APP_AUTH_ENDPOINT;
    const RESPONSE_TYPE = "token"//process.env.REACT_APP_RESPONSE_TYPE;

    console.log(CLIENT_ID)
    console.log(RESPONSE_TYPE)


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)



        console.log(token)

    }, [])

    return (
        <>
            <div>
                LoginRightSection
                <div>
                    <button>
                        {/* <a
                            href={}
                            >
                            <FcGoogle />Login with Google
                        </a> */}

                        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>


                            Login
                            to Spotify</a>

                    </button>
                </div>

            </div>

        </>
    )
}

export default LoginRightSection