import React from 'react';

import "../styles/albumitem.css"

export const Card = ({ playlist, props }) => {
    return (
        <div
            className="card__item--container"
            key={props.id}
        >
            <div
                className="card__image--container"
            >
                <img src={props.images[0].url} alt="artits" />
            </div>
            <h4
                className="card__name"
            >{props.name}</h4>
        </div>
    )
}

export default Card