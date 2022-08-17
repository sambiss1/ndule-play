import React from 'react';

import "../styles/albumitem.css"

export const Card = ({ playlist }) => {
    return (
        <div
            className="card__item--container"
            key={playlist.id}
        >
            <div
                className="card__image--container"
            >
                <img src={playlist.images[0].url} alt="artits" />
            </div>
            <h4
                className="card__name"
            >{playlist.name}</h4>
        </div>
    )
}

export default Card