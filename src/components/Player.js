import React, { useContext } from "react";
import "../styles/player.css";
import SpotifyPlayer from "react-spotify-web-playback";
import SpotifyWebApi from "spotify-web-api-js";
import { UserContext } from "../UserContext";

export function Player() {
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(window.localStorage.getItem("token"));
  const { anUri } = useContext(UserContext);
  return (
    <div className="music__player--container">
      <SpotifyPlayer
        token={window.localStorage.getItem("token")}
        uris={[anUri]}
        styles={{
          activeColor: "#fff",
          bgColor: "#333",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#DE5000",
          trackArtistColor: "#ccc",
          trackNameColor: "#DE5000",
        }}
      />
    </div>
  );
}

export default Player;
