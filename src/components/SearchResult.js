/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-named-as-default */
import { React, useContext } from "react";
import { FiPlay } from "react-icons/fi";
import { UserContext } from "../UserContext";
import LoadingData from "./LoadingData";
import "../styles/searchresult.css";
import "../styles/albumitem.css";


function SearchResult() {
    const { artistSearched, termSearched } = useContext(UserContext);

    console.log(termSearched);
    console.log("Tracks searched : ", termSearched.tracks.items);
    return (
        <div
            className="search__result--container"
        >
            {termSearched.tracks.items.length <= 0 ? (<LoadingData />) : (
                <>
                    <h4>Musiques</h4>
                    <div className="searched__track--container">
                        {
                            termSearched.tracks.items.map(track => track.name + track.album.images + track.artists &&
                                <div className="card__item--container" key={track.id} >
                                    <div className="card__image--container">
                                        {track.album.images.length ? (<img src={track.album.images[0].url} alt="track cover" />) : (<h5>No image</h5>)}
                                    </div>

                                    <h4>{track.name}</h4>
                                    <h4>{track.artists.map(artist => `${artist.name}, `)}</h4>
                                    <div
                                        className="play__icon--container"
                                        onClick={() => {
                                            console.log("play");
                                            // console.log(newalbum.uri);
                                            // setAnUri(newalbum.uri);
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
            {
                artistSearched.length ? (
                    <LoadingData />
                ) : (
                    <div>
                        <h4>Meilleur Resultat</h4>
                        {artistSearched.map(
                            (artist) =>
                                artist.name + artist.images && (
                                    <div>

                                        <h4>{artist.name}</h4>
                                        <div>
                                            {artist.images.length ? (<LoadingData />) : (
                                                <img src={artist.images.url} alt="Search result img" />
                                            )}
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                )
            }
        </div >
    );
}

export default SearchResult;
