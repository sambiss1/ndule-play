import React from 'react';
import "../styles/albumitem.css";


export const LikedSongCard = ({ props }) => {
    return (
        <div
            className="card__item--container"
            key={props.id}
        >
            <div
                className="card__image--container"
            >
                <img src={props.track.album.images[0].url} alt="artits" />
            </div>
            <h4
                className="card__name"
            >{props.track.artists[0].name}</h4>
            <h4
                className="album__name"
            >{props.track.name}</h4>


        </div>
    )
}

export default LikedSongCard