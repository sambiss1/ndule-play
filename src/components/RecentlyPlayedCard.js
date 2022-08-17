import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/albumitem.css"

export const RecentlyPlayedCard = ({ props }) => {
    return (
        <div
            className="card__item--container"
            key={props.track.id}
        >
            <div
                className="card__image--container"
            >
                <img src={props.track.album.images[0].url} alt="artits" />
            </div>
            <Link to={`/artist/${props.track.artists[0].id}`}>
                <h4
                    className="card__name"
                >{props.track.artists[0].name}</h4>
            </Link>
            <Link
                to={`/track/${props.track.id}`}
                className="track__link"
            >
                <h4
                    className="album__name"
                >{props.track.name}

                </h4>
            </Link>



        </div>
    )
}

export default RecentlyPlayedCard