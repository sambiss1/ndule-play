import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken(localStorage.getItem("token"));

export default spotifyApi;
