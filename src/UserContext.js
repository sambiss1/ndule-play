import { React, useEffect, useState, useContext, createContext } from "react";

import axios from "axios";

export const UserContext = createContext({ token: "", auth: false });


export const UserProvider = ({ children }) => {
    const CLIENT_ID = "5aa0312dd868402aa4f2f05f91de64e1";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE = "playlist-read-private user-read-private user-read-email user-read-playback-state user-top-read playlist-read-private"


    const [user, setUser] = useState({ token: "", auth: false })



    const login = () => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
            setUser({
                token: token,
                auth: true
            })

            user_account()

        }



    }
    const handleLogin = (user) => {

        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

    }
    const user_account = async (access_token) => {

        console.log(window.localStorage.getItem("token"))

        access_token = window.localStorage.getItem("token")

        console.log(access_token)

        const user = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                "Authorization": "Bearer " + access_token
            }
        })
            .then(response => {

                // Return the full details of the user.
                return response;

            })

            .catch(err => {
                return (err);
            });

        console.log(user.data)

        return user;
    }


    const getAlbums = async (access_token) => {

    }




    useEffect(() => {
        login()

    }, [])






    const logout = () => {
        window.localStorage.removeItem("token")
        setUser({
            token: "",
            auth: false
        })

        console.log(user.auth)
        console.log(user.token)
    }





    return (

        <UserContext.Provider value={{ login, user, logout, handleLogin, user_account }} >
            {children}
        </UserContext.Provider>
    )

}


export default UserProvider