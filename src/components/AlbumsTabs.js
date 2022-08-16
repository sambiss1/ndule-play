import { React, useState } from 'react';

import AlbumItem from './AlbumItem';

import { UserContext } from '../UserContext';

import "../styles/albumitem.css"

export const AlbumsTabs = ({ artist }) => {
    let myTopArtists = JSON.parse(localStorage.getItem("my_top_artist"));


    // console.log(myTopArtists.map((item) => item.images[0]));

    let artistImage = myTopArtists.map((item) => item.images[0])

    // console.log(artistImage.map((item) => item.url))

    const [artists, setArtists] = useState(myTopArtists);
    console.log(artists.map(artist => artist.name && artist.images.find(image => image.url)))


    return (


        <div
            className="album__tabs--container"
        >
            <div><h3>Nouveautés</h3>

            </div>
            <div
                className="album__tabs--panel"

            >

                {artistImage.map((artist) => artist &&
                    <AlbumItem artist={artist} />

                )}

                {artists.map(artist => artist &&
                    <AlbumItem artist={artist} />
                )}

            </div>


        </div>


    )
}

export default AlbumsTabs