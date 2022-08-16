import { React, useEffect, useState, createContext } from "react";
import axios from "axios";
// import Spotify from 'spotify-web-api-js';


export const UserContext = createContext({ token: "", auth: false }, { username: "" });


export const UserProvider = ({ children }) => {
    const CLIENT_ID = "5aa0312dd868402aa4f2f05f91de64e1";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE = "playlist-read-private user-read-private user-read-email user-read-playback-state user-top-read user-library-modify user-library-read user-read-currently-playing playlist-read-private"


    const [user, setUser] = useState({ token: "", auth: false })
    const [username, setUsername] = useState("")


    let access_token = window.localStorage.getItem("token")

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
            getAlbums()

        }


    }
    const handleLogin = (user) => {

        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

    }
    const user_account = async (access_token) => {

        access_token = window.localStorage.getItem("token");

        const logged_user = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                "Authorization": "Bearer " + access_token
            }
        })
            .then(response => {

                return response;
            })

            .catch(err => {
                return (err);
            });

        console.log(logged_user.data)
        console.log(logged_user.data.display_name)

        setUsername(logged_user.data.display_name)


        return logged_user;
    }




    const getAlbums = async (access_token) => {
        access_token = window.localStorage.getItem("token")

        const album = await axios.get("https://api.spotify.com/v1/browse/new-releases?market=CD&limit=20&offset=5", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + access_token
            }
        })

            .then(response => response)
            .catch(error => error)
        // .finally(data => r)

        console.log(album)
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

        <UserContext.Provider value={{ login, user, logout, handleLogin, user_account, username }} >
            {children}
        </UserContext.Provider>
    )

}


export default UserProvider