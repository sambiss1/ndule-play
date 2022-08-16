import { React } from 'react';

export const AlbumItem = ({ artist }) => {

    return (
        <div
            className="album__item--container"
            key={artist.id}
        >
            <img src={artist.url} alt="artits" />
            <p>{artist.name}</p>
        </div>
    )
}

export default AlbumItem