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
    const { termSearched, setPlay, setAnUri, cursor } = useContext(UserContext);

    return (
        <div
            className="search__result--container"
            style={{ cursor: `${cursor}` }}
        >
            {termSearched.tracks.items.length <= 0 ? (<LoadingData />) : (
                <>
                    <h3 style={{ color: "#de5000" }}>Musiques</h3>
                    <div className="searched__track--container">
                        {
                            termSearched.tracks.items.map(track => track.name + track.album.images + track.artists &&
                                <div className="card__item--container" key={track.id} >
                                    <div className="card__image--container">
                                        {track.album.images.length ? (<img src={track.album.images[0].url} alt="track cover" />) : (<h5>No image</h5>)}
                                    </div>

                                    <h4
                                        className="card__name"
                                        style={{ color: "#de5000" }}>{track.name}</h4>
                                    <h4 className="album__name"
                                    >{track.artists[0].name}</h4>
                                    <div
                                        className="play__icon--container"
                                        onClick={() => {
                                            setAnUri(track.uri);
                                            setPlay(true);
                                        }}
                                    >
                                        <FiPlay className="play__icon" />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </>
            )
            }
            {termSearched.albums.items.length <= 0 ? (<LoadingData />) : (
                <>
                    <h3 style={{ color: "#de5000" }}>Album</h3>
                    <div className="searched__track--container">
                        {
                            termSearched.albums.items.map(album => album.name + album.images + album.artists &&
                                <div className="card__item--container" key={album.id} >
                                    <div className="card__image--container">
                                        {album.images.length ? (<img src={album.images[0].url} alt="track cover" />) : (<h5>No image</h5>)}
                                    </div>

                                    <h4
                                        className="card__name"
                                        style={{ color: "#de5000" }}>{album.name}</h4>
                                    <h4
                                        className="album__name"
                                    >{album.artists[0].name}</h4>
                                    <div
                                        className="play__icon--container"
                                        onClick={() => {
                                            setAnUri(album.uri);
                                            setPlay(true);
                                        }}
                                    >
                                        <FiPlay className="play__icon" />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </>
            )
            }

        </div>
    );
};

export default SearchResult;
