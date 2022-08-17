import { React, useEffect, useState, createContext } from "react";
import axios from "axios";
import Spotify from 'spotify-web-api-js';
import SpotifyWebApi from "spotify-web-api-js";



export const UserContext = createContext({ token: "", auth: false, username: "", userID: "" });


export const UserProvider = ({ children }) => {
    const CLIENT_ID = "5aa0312dd868402aa4f2f05f91de64e1";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE = "playlist-read-private user-read-private user-read-email user-read-playback-state user-top-read user-library-modify user-library-read user-read-currently-playing playlist-read-private";

    const [user, setUser] = useState({ token: "", auth: false });
    const [username, setUsername] = useState("");
    const [userID, setUserID] = useState("")

    const createToken = () => {
        // Get and create user logged token from spotify 
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("token", token);
            setUser({
                token: token,
                auth: true
            })
            getDataFromSpotify();
            getMyAccount();
            // getMyTopAlbum();
            getNewRelease();

            getUserPlaylist();
            getAllCategory();
        }
    }

    // Login function
    const handleLogin = (user) => {
        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    }

    useEffect(() => {
        createToken();
    }, [])


    let spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem('token'));

    const getMyAccount = async () => {
        try {
            const getMyUserName = await spotifyApi.getMe();
            // console.log(getMyUserName.id)
            // console.log(getMyUserName.display_name);
            window.localStorage.setItem("logged__user", getMyUserName.display_name);
            window.localStorage.setItem("logged__user__id", getMyUserName.id)
            setUsername(getMyUserName.display_name);
            setUserID(getMyUserName.id)

        }
        catch (error) {
            console.log(error);
        }
    }


    // Get data from spotify 
    const getDataFromSpotify = () => {
        try {
            const getMyTopArtists = async () => {
                spotifyApi.setAccessToken(localStorage.getItem('token'));
                const myTopArtist = await spotifyApi.getMyTopArtists();
                localStorage.setItem("my_top_artist", JSON.stringify(myTopArtist.items))
            }

            getMyTopArtists();
        }
        catch (error) {
            console.log(error);
        }


    }

    const getMyTopAlbum = async () => {
        try {
            const myTopAlbum = await spotifyApi.getAlbums([])
        }
        catch (error) {
            console.log(error)
        }


    }


    const getNewRelease = async () => {
        const getNewAlbumRelease = await spotifyApi.getNewReleases()

        console.log(getNewAlbumRelease.albums.items)
        localStorage.setItem("new-release-album", JSON.stringify(getNewAlbumRelease.albums.items))
    }

    // Get my playlist 
    const getUserPlaylist = async () => {

        try {
            const getMyPlaylist = await spotifyApi.getUserPlaylists({ userID })
            console.log(getMyPlaylist.items)
            localStorage.setItem("user__playlist", JSON.stringify(getMyPlaylist.items))
        }
        catch (error) {
            console.log(error)
        }
    }

    const getAllCategory = async () => {
        try {
            const getCategories = await spotifyApi.getCategories()

            console.log(getCategories)
        }
        catch (error) {
            console.log(error)
        }
    }



    // Logout function
    const logout = () => {

        window.localStorage.removeItem("token");
        window.localStorage.removeItem("logged__user");
        setUser({
            token: "",
            auth: false
        })

        console.log(window.localStorage.getItem("token"))


        console.log(user.auth)
    }



    return (

        <UserContext.Provider value={{ createToken, user, username, logout, handleLogin, userID }} >
            {children}
        </UserContext.Provider>
    )

}


export default UserProvider