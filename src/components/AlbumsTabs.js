import { React, useState } from 'react';

import AlbumItem from './AlbumItem';

import { UserContext } from '../UserContext';

import "../styles/albumitem.css"

export const AlbumsTabs = ({ artist, newalbum }) => {
    let myTopArtists = JSON.parse(localStorage.getItem("my_top_artist"));
    let newReleaseAlbum = JSON.parse(localStorage.getItem("new-release-album"))


    // console.log(newReleaseAlbum.map((newalbum) => newalbum.id))
    return (
        <div
            className="album__tabs--container"
        >
            <div><h3>Nouveautés</h3>

            </div>
            <div
                className="card__tabs--panel"

            >
                {
                    newReleaseAlbum.map((newalbum) => newalbum.name + newalbum.artists[0].name + newalbum.images[0].url
                        &&
                        <AlbumItem
                            key={newalbum.id}
                            newalbum={newalbum} />
                    )
                }

            </div>


        </div>


    )
}

export default AlbumsTabs