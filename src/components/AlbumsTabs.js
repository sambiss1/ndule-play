import { React } from 'react';

import AlbumItem from './AlbumItem';

import "../styles/albumitem.css"

export const AlbumsTabs = () => {
    return (


        <div
            className="album__tabs--container"
        >
            <div><h3>Nouveautés</h3>

            </div>
            <div
                className="album__tabs--panel"
            >
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
                <AlbumItem />
            </div>


        </div>


    )
}

export default AlbumsTabs