import { React } from 'react';
import { Link } from 'react-router-dom';

export const AlbumItem = ({ newalbum }) => {

    return (
        <div
            className="card__item--container"
            key={newalbum.id}
        >
            <div
                className="card__image--container"
            >
                <Link to={`/album/${newalbum.id}`} className="track__link">
                    <img src={newalbum.images[0].url} alt="artits" />
                </Link>
            </div>
            <Link to={`/artist/${newalbum.artists[0].id}`}>

                <h4
                    className="card__name"
                >{newalbum.artists[0].name}</h4>
            </Link>
            <Link to={`/album/${newalbum.id}`} className="track__link">
                <h4
                    className="album__name"
                >{newalbum.name}</h4>
            </Link>


        </div>
    )
}

export default AlbumItem