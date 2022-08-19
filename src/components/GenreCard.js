import React from 'react';
import "../styles/albumitem.css"

const GenreCars = ({ props }) => {
    return (
        <div
            className="card__item--container"
            key={props.id}
        >
            <div
                className="card__image--container"
            >
                <img src={props.icons[0].url} alt="artits" />
            </div>
            <h4
                className="card__name"
            >{props.name}</h4>
        </div>
    )
}

export default GenreCars