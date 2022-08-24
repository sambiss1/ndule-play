/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable object-shorthand */
/* eslint-disable no-use-before-define */

/* eslint-disable react/prop-types */

/* eslint-disable react/function-component-definition */
import { React, useEffect, useState, createContext, useMemo } from "react";
import SpotifyWebApi from "spotify-web-api-js";

export const UserContext = createContext({
    token: "",
    auth: false,
    username: "",
    userID: "",
});

export const UserProvider = ({ children }) => {
    const CLIENT_ID = "5aa0312dd868402aa4f2f05f91de64e1";
    const REDIRECT_URI = "http://localhost:3000/";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE =
        "playlist-read-private user-read-private user-read-email user-read-playback-state user-top-read user-library-modify user-library-read user-read-currently-playing playlist-read-private user-read-recently-played app-remote-control streaming";

    const [user, setUser] = useState({ token: "", auth: false });
    const [username, setUsername] = useState("");
    const [userID, setUserID] = useState("");
    const [termSearched, setTermSearched] = useState([]);
    const [term, setTerm] = useState("");
    const [search, setSearch] = useState(false);
    const [anUri, setAnUri] = useState("");
    const [play, setPlay] = useState(false);
    const [categoryId, setCategoryId] = useState("");
    const [newReleaseAlbum, setNewReleaseAlbum] = useState([]);
    const [likedSong, setLikedSong] = useState([]);

    const createToken = () => {
        // Get and create user logged token from spotify
        const { hash } = window.location;
        let token = window.localStorage.getItem("token");
        if (!token && hash) {
            // eslint-disable-next-line prefer-destructuring
            token = hash.substring(1).split("&").find((elem) => elem.startsWith("access_token")).split("=")[1];
            window.location.hash = "";
            window.localStorage.setItem("token", token);
            setUser({
                token: token,
                auth: true,
            });
            getMyAccount();
            getUserPlaylist();
            getAllCategory();
        }
    };

    // Login function
    const handleLogin = () => {
        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    };

    useEffect(() => {
        createToken();
    }, []);

    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(localStorage.getItem("token"));

    const getMyAccount = async () => {
        try {
            const getMyUserName = await spotifyApi.getMe();

            window.localStorage.setItem("logged__user", getMyUserName.display_name);
            window.localStorage.setItem("user__logged", getMyUserName.display_name);
            window.localStorage.setItem("logged__user__id", getMyUserName.id);
            setUsername(getMyUserName.display_name);
            setUserID(getMyUserName.id);


        } catch (error) {
            console.log(error);
        }
    };

    // Get data from spotify
    const getNewRelease = async () => {
        try {
            const getNewAlbumRelease = await spotifyApi.getNewReleases();
            localStorage.setItem(
                "new-release-album",
                JSON.stringify(getNewAlbumRelease.albums.items)
            );
            setNewReleaseAlbum(getNewAlbumRelease.albums.items);
        } catch (error) {
            console.log(error);
        }
    };

    // Get my playlist
    const getUserPlaylist = async () => {
        try {
            const getMyPlaylist = await spotifyApi.getUserPlaylists({ userID });
            localStorage.setItem(
                "user__playlist",
                JSON.stringify(getMyPlaylist.items)
            );
        } catch (error) {
            console.log(error);
        }
    };

    const getAllCategory = async () => {
        try {
            const getCategories = await spotifyApi.getCategories();

            localStorage.setItem(
                "categories",
                JSON.stringify(getCategories.categories.items)
            );
        } catch (error) {
            console.log(error);
        }
    };

    // Get recently played
    const getRecentlyPlayed = async () => {
        try {
            const recentPlayed = await spotifyApi.getMyRecentlyPlayedTracks();
            localStorage.setItem(
                "user__recently__played",
                JSON.stringify(recentPlayed.items)
            );
        } catch (error) {
            console.log(error);
        }
    };

    // Get liked songs
    const getUserLikedSongs = async () => {
        try {
            const likedSongs = await spotifyApi.getMySavedTracks();

            localStorage.setItem(
                "user__liked__songs",
                JSON.stringify(likedSongs.items)
            );
            setLikedSong(likedSongs.items);
        } catch (error) {
            console.log(error);
        }
    };

    // Logout function
    const logout = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("logged__user");
        window.localStorage.clear();
        setUser({
            token: "",
            auth: false,
        });

    };

    // Convert seconds to minutes
    const millisToMinutesAndSeconds = (millis) => {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    // search item

    const searchArtist = async (event) => {
        event.preventDefault();
        const searchForArtist = await spotifyApi.search(term, [
            "album",
            "artist",
            "playlist",
            "track",
        ]);

        setTermSearched(searchForArtist);
        setSearch(true);
    };

    const ProvideValue = useMemo(() => ({
        createToken,
        getMyAccount,
        user,
        username,
        logout,
        handleLogin,
        userID,
        getUserLikedSongs,
        getRecentlyPlayed,
        getAllCategory,
        getNewRelease,
        millisToMinutesAndSeconds,
        search,
        term,
        setTerm,
        termSearched,
        setTermSearched,
        searchArtist,
        newReleaseAlbum,
        setNewReleaseAlbum,
        likedSong,
        setLikedSong,
        anUri,
        setAnUri,

        play,
        setPlay,
        categoryId,
        setCategoryId
    }), ([createToken,
        user,
        username,
        getMyAccount,
        logout,
        handleLogin,
        userID,
        getUserLikedSongs,
        getRecentlyPlayed,
        getAllCategory,
        getNewRelease,
        millisToMinutesAndSeconds,
        search,
        term,
        setTerm,
        termSearched,
        setTermSearched,
        searchArtist,
        newReleaseAlbum,
        setNewReleaseAlbum,
        likedSong,
        setLikedSong,
        anUri,
        setAnUri,
        play,
        setPlay,
        categoryId,
        setCategoryId]));

    return (
        <UserContext.Provider
            value={ProvideValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
