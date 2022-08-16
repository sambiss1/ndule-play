import { React } from 'react';

export const AlbumItem = ({ newalbum }) => {

    return (
        <div
            className="album__item--container"
            key={newalbum.id}
        >
            <div
                className="album__image--container"
            >
                <img src={newalbum.images[0].url} alt="artits" />
            </div>
            <h4
                className="artist__name"
            >{newalbum.artists[0].name}</h4>
            <h4
                className="album__name"
            >{newalbum.name}</h4>


        </div>
    )
}

export default AlbumItem