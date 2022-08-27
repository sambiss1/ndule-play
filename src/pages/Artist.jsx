/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import ArtistTopTracksCard from "../components/ArtistTopTracksCard";
import LoadingData from "../components/LoadingData";

import "../styles/App.css";
import "../styles/homepage.css";
import "../styles/artistpage.css";

const Artist = () => {
  const { id } = useParams();

  console.log(id);

  const spotifyArtist = new SpotifyWebApi();

  console.log(localStorage.getItem("token"));

  spotifyArtist.setAccessToken(localStorage.getItem("token"));
  const [artist, setArtist] = useState([]);
  const [artistTopTrack, setArtistTopTrack] = useState([]);

  // let artist = []
  const getArtistInfo = async () => {
    try {
      const getSelectedArtist = await spotifyArtist.getArtist(id);
      localStorage.setItem("artist", JSON.stringify(getSelectedArtist));

      setArtist(getSelectedArtist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getArtistInfo();
    }, 2000);
  }, []);

  const getTopTrack = async () => {
    const getArtistTopTrack = await spotifyArtist.getArtistTopTracks(id, "CD");
    // console.log(getArtistTopTrack.tracks);
    setArtistTopTrack(getArtistTopTrack.tracks);
  };

  useEffect(() => {
    setTimeout(() => {
      getTopTrack();
    }, 2000);
  }, []);

  const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="homepage__content">
      <div className="main__container">
        {artist.length <= 0 ? (
          <LoadingData />
        ) : (
          <div className="page__content">
            <div className="artist__cover--container">
              <div className="artist__image--container">
                {artist.length <= 0 ? (
                  <LoadingData />
                ) : (
                  <img src={artist.images[2].url} alt="artist cover" />
                )}
              </div>
              <div>
                <h3>{artist.name}</h3>
                <h4>{artist.followers.total} followers</h4>
              </div>
            </div>
            <h3 className="page__title">Titres populaires</h3>
            <div className="populars__tracks--container">
              {artistTopTrack.length <= 0 ? (
                <LoadingData />
              ) : (
                artistTopTrack.map(
                  (topTrack) =>
                    topTrack.name +
                      topTrack.album.images[0].url +
                      topTrack.popuality +
                      millisToMinutesAndSeconds(topTrack.duration_ms) && (
                      <ArtistTopTracksCard key={topTrack.id} props={topTrack} />
                    )
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artist;
