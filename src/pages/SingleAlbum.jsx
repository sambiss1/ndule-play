/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";
import { FiPlay, FiHeart, FiPause } from "react-icons/fi";
import LoadingData from "../components/LoadingData";
import { UserContext } from "../UserContext";
import AlbumTrack from "../components/AlbumTrack";

import "../styles/App.css";
import "../styles/singlealbum.css";
import "../styles/homepage.css";

export const SingleAlbum = () => {
  const { id } = useParams();
  const { setAlbumUri, setAnUri, setPlay, play } = useContext(UserContext);
  const [album, setAlbum] = useState([]);
  const [albumTracks, setAlbumTracks] = useState([]);

  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(window.localStorage.getItem("token"));

  const getAlbums = async () => {
    try {
      const getAlbum = await spotifyApi.getAlbum(id);

      setAlbum(getAlbum);
      setAlbumTracks(getAlbum.tracks.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getAlbums();
    }, 300);
  }, []);

  const playAlbum = async () => {
    setAlbumUri(album.uri);
  };
  useEffect(() => {
    playAlbum();
  }, []);

  return (
    <div className="homepage__content">
      <div className="main__container">
        {album.length <= 0 ? (
          <LoadingData />
        ) : (
          <div className="page__content">
            <div className="album__main--container">
              <div className="album__cover--container">
                <img src={album.images[0].url} alt="cover album" />
              </div>
              <div className="album__details--container">
                <h3>Album</h3>

                <h3 className="single__album--name">{album.name}</h3>
                <div className="album__other__detail--container">
                  {album.artists.length > 1 ? (
                    album.artists.map(
                      (artist) => artist.name && <h3>{artist.name}</h3>
                    )
                  ) : (
                    <h3>{album.artists[0].name}</h3>
                  )}
                  <h4>{album.release_date.slice(0, 4)}</h4>
                  <h4>{album.total_tracks} titres </h4>
                </div>
              </div>
              <div className="album__actions--container">
                {play ? (
                  <FiPause
                    className="album__actions--play"
                    onClick={() => {
                      setAnUri(album.uri);
                      setPlay(false);
                    }}
                  />
                ) : (
                  <FiPlay
                    className="album__actions--play"
                    onClick={() => {
                      setAnUri(album.uri);
                      setPlay(true);
                    }}
                  />
                )}

                <FiHeart className="album__actions--like" />
              </div>
            </div>
            <div className="album__tracks__list--container">
              <h3>Titres</h3>
              {albumTracks.length <= 0 ? (
                <LoadingData />
              ) : (
                albumTracks.map(
                  (albumTrack) =>
                    albumTrack.artists +
                      albumTrack.name +
                      albumTrack.track_number && (
                      <AlbumTrack key={albumTrack.id} props={albumTrack} />
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

export default SingleAlbum;
