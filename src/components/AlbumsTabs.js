/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
import { React, useContext, useEffect } from "react";

import AlbumItem from "./AlbumItem";

import "../styles/albumitem.css";
import { UserContext } from "../UserContext";
import LoadingData from "./LoadingData";

export const AlbumsTabs = () => {
    const { getNewRelease, newReleaseAlbum, setNewReleaseAlbum } = useContext(UserContext);
    useEffect(() => {
        setTimeout(() => {
            getNewRelease();
        }, 300);
    }, []);

    return (<div className="album__tabs--container">
        <div>
            <h3>Nouveautés</h3>
        </div>
        {newReleaseAlbum.length <= 0 ? (<LoadingData />) : (
            <div className="card__tabs--panel">

                {newReleaseAlbum.map(
                    (newalbum) =>
                        newalbum.name + newalbum.artists[0].name + newalbum.images[0].url && (
                            <AlbumItem key={newalbum.id} newalbum={newalbum} />
                        )
                )}
            </div>)

        }

    </div>);
};

export default AlbumsTabs;
