/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable object-shorthand */
/* eslint-disable no-use-before-define */

/* eslint-disable react/prop-types */

/* eslint-disable react/function-component-definition */
import { React, useEffect, useState, createContext } from "react";
import SpotifyWebApi from "spotify-web-api-js";

export const UserContext = createContext({
    token: "",
    auth: false,
    username: "",
    userID: "",
});

export const UserProvider = ({ children }) => {
    const CLIENT_ID = "c8777ac2c42a4929a927c7a99c43a1d8";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE =
        "playlist-read-private user-read-private user-read-email user-read-playback-state user-top-read user-library-modify user-library-read user-read-currently-playing playlist-read-private user-read-recently-played app-remote-control streaming";

    const [user, setUser] = useState({ token: "", auth: false });
    const [userToken, setUserToken] = useState("");
    const [username, setUsername] = useState("");
    const [userID, setUserID] = useState("");
    const [termSearched, setTermSearched] = useState([]);
    const [term, setTerm] = useState("");
    const [search, setSearch] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [anUri, setAnUri] = useState("");
    const [play, setPlay] = useState(false);
    const [categoryId, setCategoryId] = useState("");
    const [newReleaseAlbum, setNewReleaseAlbum] = useState([]);
    const [likedSong, setLikedSong] = useState([]);
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);
    const [userPlayList, setUserPlayList] = useState([]);
    const [cursor, setCursor] = useState("auto");
    const [ambianceTracks, setAmbianceTracks] = useState([]);
    const [activeTab, setActiveTab] = useState([]);

    const createToken = () => {
        // Get and create user logged token from spotify
        const { hash } = window.location;
        let token = window.localStorage.getItem("token");
        if (!token && hash) {
            // eslint-disable-next-line prefer-destructuring
            token = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("access_token"))
                .split("=")[1];
            window.location.hash = "";
            window.localStorage.setItem("token", token);
            setUserToken(token);
            setUser({
                token: token,
                auth: true,
            });
        }
    };

    useEffect(() => {
        createToken();
        getAllCategory();
    }, []);

    // Login function
    const handleLogin = () => {
        window.location =
            process.env.NODE_ENV === "production"
                ? `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${process.env.REACT_APP_PRO_MODE_REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
                : `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${process.env.REACT_APP_DEV_MODE_REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    };

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
            const getNewAlbumRelease = await spotifyApi.getNewReleases(10);
            localStorage.setItem(
                "new-release-album",
                JSON.stringify(getNewAlbumRelease.albums.items)
            );
            setNewReleaseAlbum(getNewAlbumRelease.albums.items);
            // setActiveTab(getNewAlbumRelease.albums.items);
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
            setUserPlayList(getMyPlaylist.items);
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
            setRecentlyPlayed(recentPlayed.items);
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

    // get Ambiance songs recommandations
    const getAmbianceSongs = async () => {
        try {
            const getAmbianceSongsRecommended = await spotifyApi.getRecommendations({
                seed_artists: "0is7KJiz3t87LiJWUO1tNI,7xNYY1Zkb1vks5m9ATlJok",
                seed_genres: "ambiance",
                seed_tracks: "",
            });
            setAmbianceTracks(getAmbianceSongsRecommended.tracks);
        } catch (err) {
            console.log(err);
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
        // style = { cursor: "pointer" }
        setCursor("wait");
    };

    getMyAccount();

    return (
        <UserContext.Provider
            value={{
                createToken,
                userToken,
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
                isSearching,
                setIsSearching,
                termSearched,
                setTermSearched,

                searchArtist,
                newReleaseAlbum,
                setNewReleaseAlbum,
                likedSong,
                setLikedSong,
                recentlyPlayed,
                setRecentlyPlayed,
                userPlayList,
                setUserPlayList,
                getUserPlaylist,
                anUri,
                setAnUri,
                play,
                setPlay,
                categoryId,
                setCategoryId,
                cursor,
                setCursor,
                activeTab,
                setActiveTab,
                ambianceTracks,
                setAmbianceTracks,
                getAmbianceSongs,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
