/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */

/* eslint-disable import/no-named-as-default */
import { React, useEffect, useState } from "react";
import spotifyApi from "../utils";

import AlbumItem from "./AlbumItem";
import AmbianceSongItem from "./AmbianceSongItem";
import TabNavItem from "./TabNavItem";
import TopArtistCard from "./TopArtistCard";


import "../styles/albumitem.css";
import LoadingData from "./LoadingData";

export const AlbumsTabs = ({ id }) => {
    const [newRelease, setNewRelease] = useState([]);
    const [isActiveTab, setIsActiveTab] = useState("tab1");
    const [ambianceTracks, setAmbianceTracks] = useState([]);
    const [topArtists, setTopArtists] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [anError, setAnError] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [activeTabButton, setActiveTabButton] = useState("active__tab--button");

    useEffect(() => {
        const getNewReleaseFUnction = async () => {
            try {
                const newReleaseAlbum = await spotifyApi.getNewReleases();
                setNewRelease(newReleaseAlbum.albums.items);
            } catch (error) {
                setNewRelease([]);
                setAnError(error);
            }
        };

        getNewReleaseFUnction();

        // get Ambiance songs recommandations
        const getAmbianceSongs = async () => {
            try {
                const getAmbianceSongsRecommended = await spotifyApi.getRecommendations(
                    {
                        seed_artists: "0is7KJiz3t87LiJWUO1tNI,7xNYY1Zkb1vks5m9ATlJok",
                        seed_genres: "ambiance",
                        seed_tracks: "",
                    }
                );
                setAmbianceTracks(getAmbianceSongsRecommended.tracks);
            } catch (err) {
                setAnError(err);
            }
        };
        getAmbianceSongs();

        // Get user top artist 
        const getUSerTopArtist = async () => {
            try {

                const myTopArtist = await spotifyApi.getMyTopArtists({ limit: 10 });
                setTopArtists(myTopArtist.items);
            }

            catch (error) {
                setAnError(error);
            }
        };

        getUSerTopArtist();
    }, []);

   

    // eslint-disable-next-line no-unused-vars
    const handleActiveTab = () => {
        setIsActiveTab(id);
    };

    return (
        <div className="album__tabs--container">
            <div className="tab__navigation--container">
                <button
                    className={isActiveTab === "tab1" ? "active__tab--button" : "tab__navigation--button"}
                    onClick={() => {
                        setIsActiveTab("tab1");
                    }}
                >
                    Nouveautés
                </button>
                <button
                    className={isActiveTab === "tab2" ? "active__tab--button" : "tab__navigation--button"}
                    onClick={() => {
                        setIsActiveTab("tab2");
                    }}
                >
                    Ambiance
                </button>

            </div>
            {isActiveTab === "tab1" ? (
                <TabNavItem
                    className={isActiveTab === "tab1" ? "active__tab" : "no__active--tab"}
                >
                    {newRelease.length <= 0 ? (
                        <LoadingData />
                    ) : (
                        <div className="homepage__card--container">
                            {newRelease.map(
                                (newalbum) =>
                                    newalbum.name +
                                    newalbum.artists[0].name +
                                    newalbum.images[0].url && (
                                        <AlbumItem key={newalbum.id} newalbum={newalbum} />
                                    )
                            )}
                        </div>
                    )}
                    <div className="tab__navigation--container">
                        <button
                            className="tab__navigation--button active__tab--button"
                        >
                            Vos artistes preferés
                        </button>
                        {topArtists.length <= 0 ? (<LoadingData />) :
                            (<div className="homepage__card--container top__artist--container">
                                {topArtists.map((artist) => artist.name + artist.images + artist.id &&
                                    <TopArtistCard
                                        props={artist}
                                        key={artist.id}

                                    />
                                )
                                }
                            </div>)
                        }
                    </div>
                </TabNavItem>
            ) : (
                <TabNavItem
                    className={isActiveTab === "tab2" ? "active__tab" : "no__active--tab"}
                >
                    {ambianceTracks.length <= 0 ? (
                        <LoadingData />
                    ) : (
                        <div className="card__tabs--panel ">
                            {ambianceTracks.map(
                                (ambianceSong) =>
                                    ambianceSong.album.name +
                                    ambianceSong.name +
                                    ambianceSong.artists[0].name +
                                    ambianceSong.album.images[0] && (
                                        <AmbianceSongItem
                                            key={ambianceSong.id}
                                            props={ambianceSong}
                                        />
                                    )
                            )}
                        </div>
                    )}
                </TabNavItem>
            )}
        </div>
    );
};

export default AlbumsTabs;
