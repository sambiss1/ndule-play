import { React, useEffect, useState, createContext } from "react";
import axios from "axios";
import Spotify from 'spotify-web-api-js';


export const UserContext = createContext({ token: "", auth: false }, { username: "" }, { allAlbums: {} });


export const UserProvider = ({ children }) => {
    const CLIENT_ID = "5aa0312dd868402aa4f2f05f91de64e1";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE = "playlist-read-private user-read-private user-read-email user-read-playback-state user-top-read user-library-modify user-library-read user-read-currently-playing playlist-read-private"


    const [user, setUser] = useState({ token: "", auth: false })
    const [username, setUsername] = useState("")
    const [allAlbums, setAllAlbums] = useState({})


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

        let actual_user = window.localStorage.setItem("logged__user", logged_user.data.display_name)

        setUsername(window.localStorage.getItem("logged__user"))


        return logged_user;
    }




    const getAlbums = async (access_token) => {
        access_token = window.localStorage.getItem("token")

        const albums = await axios.get("https://api.spotify.com/v1/albums?ids=0JBjfd9NAcpgHBbllm0fQg", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + access_token
            }
        })

            .then(response => response)
            .catch(error => error)

        // console.log(albums.map((item) => item.artist))
        console.log({ albums })
        // setAllAlbums({ albums })
    }




    useEffect(() => {
        login()

    }, [])




    const logout = () => {
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("logged__user")
        setUser({
            token: "",
            auth: false
        })

        console.log(user.auth)
        console.log(user.token)
    }





    return (

        <UserContext.Provider value={{ login, user, logout, handleLogin, user_account, username, allAlbums }} >
            {children}
        </UserContext.Provider>
    )

}


export default UserProvider