/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */

/* eslint-disable import/no-named-as-default */
import { React, useContext, useEffect, useState } from "react";
import spotifyApi from "../utils";

import AlbumItem from "./AlbumItem";
import AmbianceSongItem from "./AmbianceSongItem";


import "../styles/albumitem.css";
import { UserContext } from "../UserContext";
import LoadingData from "./LoadingData";

export const AlbumsTabs = () => {
    const { ambianceTracks, activeTab, setActiveTab } =
        useContext(UserContext);

    const [newRelease, setNewRelease] = useState([]);



    useEffect(() => {

        const getNewReleaseFUnction = async () => {
            try {
                const newReleaseAlbum = await spotifyApi.getNewReleases();
                setNewRelease(newReleaseAlbum.items);
            } catch (error) {
                setNewRelease([]);
                console.log(error);
            }

        };

        getNewReleaseFUnction();

    }, []);

    console.log(ambianceTracks);
    console.log(activeTab.map((ambianceSong) => `${ambianceSong.album.name}  ${ambianceSong.name} ${ambianceSong.artists[0].name}`));

    return (
        <div className="album__tabs--container">
            <div className="tab__navigation--container">
                <button className="tab__navigation--button">Nouveautés</button>
                <button className="tab__navigation--button"
                    onClick={() => {
                        setActiveTab(ambianceTracks);
                    }}
                >Ambiance</button>

                <button className="tab__navigation--button">Afro</button>
                <button className="tab__navigation--button">Gaming</button>
            </div>
            {newRelease.length <= 0 ? (
                <LoadingData />
            ) : (
                <div className="card__tabs--panel">
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

            {activeTab.length <= 0 ? (<LoadingData />) : (
                <div className="card__tabs--panel">
                    {activeTab.map((ambianceSong) =>
                        ambianceSong.album.name + ambianceSong.name + ambianceSong.artists[0].name + ambianceSong.album.images[0] &&
                        <AmbianceSongItem key={ambianceSong.id} props={ambianceSong} />
                    )}
                </div>
            )}
        </div>
    );
};

export default AlbumsTabs;
