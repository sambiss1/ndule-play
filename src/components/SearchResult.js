/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-named-as-default */
import { React, useContext } from "react";
import { FiPlay } from "react-icons/fi";
import { UserContext } from "../UserContext";
import LoadingData from "./LoadingData";
import "../styles/searchresult.css";
import "../styles/albumitem.css";

export const SearchResult = () => {
  const { termSearched, setPlay, setAnUri, cursor, anUri } = useContext(UserContext);

  console.log(termSearched.artists);

  return (
    <div className="search__result--container" style={{ cursor: `${cursor}` }}>

      {/* Track result */}
      {termSearched.tracks.items.length <= 0 ? (
        <LoadingData />
      ) : (
        <>
          <h3 className="search__result--title">Musiques</h3>
          <div className="searched__track--container">
            {termSearched.tracks.items.map(
              (track) =>
                track.name + track.album.images + track.artists && (
                  <div className="card__item--container" key={track.id}>
                    <div className="card__image--container">
                      {track.album.images.length ? (
                        <img
                          src={track.album.images[0].url}
                          alt="track cover"
                        />
                      ) : (
                        <h5>No image</h5>
                      )}
                    </div>

                    <h4 className="card__name" style={{ color: "#de5000" }}>
                      {track.name}
                    </h4>
                    <h4 className="album__name">{track.artists[0].name}</h4>
                    <div
                      className="play__icon--container"
                      onClick={() => {
                        setAnUri(track.uri);
                        setPlay(true);
                      }}
                    >
                      {anUri === track.uri ? (
                        <div className="spinner">
                          <div className="r1"></div>
                          <div className="r2"></div>
                          <div className="r3"></div>
                          <div className="r4"></div>
                          <div className="r5"></div>
                        </div>
                      ) : (
                        <FiPlay className="play__icon" />
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        </>
      )}

      {/* Albums result */}
      {termSearched.albums.items.length <= 0 ? (
        <LoadingData />
      ) : (
        <>
          <h3 className="search__result--title">Album</h3>
          <div className="searched__track--container">
            {termSearched.albums.items.map(
              (album) =>
                album.name + album.images + album.artists && (
                  <div className="card__item--container" key={album.id}>
                    <div className="card__image--container">
                      {album.images.length ? (
                        <img src={album.images[0].url} alt="track cover" />
                      ) : (
                        <h5>No image</h5>
                      )}
                    </div>

                    <h4 className="card__name" style={{ color: "#de5000" }}>
                      {album.name}
                    </h4>
                    <h4 className="album__name">{album.artists[0].name}</h4>
                    <div
                      className="play__icon--container"
                      onClick={() => {
                        setAnUri(album.uri);
                        setPlay(true);
                      }}
                    >
                      {anUri === album.uri ? (
                        <div className="spinner">
                          <div className="r1"></div>
                          <div className="r2"></div>
                          <div className="r3"></div>
                          <div className="r4"></div>
                          <div className="r5"></div>
                        </div>
                      ) : (
                        <FiPlay className="play__icon" />
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        </>
      )}

      {/* Artist result */}
      {termSearched.albums.items.length <= 0 ? (
        <LoadingData />
      ) : (
        <>
          <h3 className="search__result--title">Artiste</h3>
          <div className="searched__track--container">
            {termSearched.artists.items.map(
              (artist) =>
                artist.name + artist.images + artist.artists && (
                  <div className="card__item--container" key={artist.id}>
                    <div className="card__image--container">
                      {artist.images.length ? (
                        <img src={artist.images[0].url} alt="track cover" />
                      ) : (
                        <h5>No image</h5>
                      )}
                    </div>

                    <h4 className="card__name" style={{ color: "#de5000" }}>
                      {artist.name}
                    </h4>

                    <div
                      className="play__icon--container"
                      onClick={() => {
                        setAnUri(artist.uri);
                        setPlay(true);
                      }}
                    >
                      {anUri === artist.uri ? (
                        <div className="spinner">
                          <div className="r1"></div>
                          <div className="r2"></div>
                          <div className="r3"></div>
                          <div className="r4"></div>
                          <div className="r5"></div>
                        </div>
                      ) : (
                        <FiPlay className="play__icon" />
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        </>
      )}

    </div>
  );
};

export default SearchResult;
