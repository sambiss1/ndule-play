import { React, useState } from 'react';

import AlbumItem from './AlbumItem';

import { UserContext } from '../UserContext';

import "../styles/albumitem.css"

export const AlbumsTabs = ({ artist, newalbum }) => {
    let myTopArtists = JSON.parse(localStorage.getItem("my_top_artist"));


    // console.log(myTopArtists.map((item) => item.images[0]));

    let artistImage = myTopArtists.map((item) => item.images[0])

    // console.log(artistImage.map((item) => item.url))

    const [artists, setArtists] = useState(myTopArtists);
    console.log(artists.map(artist => artist.name && artist.images.find(image => image.url)))

    console.log(JSON.parse(localStorage.getItem("new-release-album")))

    let newReleaseAlbum = JSON.parse(localStorage.getItem("new-release-album"))

    console.log(newReleaseAlbum.map((newalbum) => newalbum.name + " " + newalbum.artists[0].name + newalbum.images[0].url))

    return (


        <div
            className="album__tabs--container"
        >
            <div><h3>Nouveautés</h3>

            </div>
            <div
                className="album__tabs--panel"

            >
                {
                    newReleaseAlbum.map((newalbum) => newalbum.name + newalbum.artists[0].name + newalbum.images[0].url
                        &&
                        <AlbumItem newalbum={newalbum} />
                    )
                }

            </div>


        </div>


    )
}

export default AlbumsTabs