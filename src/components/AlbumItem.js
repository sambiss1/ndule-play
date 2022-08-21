import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import { UserContext } from '../UserContext';
export const AlbumItem = ({ newalbum }) => {
    const { anUri, setAnUri } = useContext(UserContext)
    return (
        <div
            className="card__item--container"
            key={newalbum.id}
        >
            <Link to={`/album/${newalbum.id}`} className="track__link">
                <div
                    className="card__image--container"
                >

                    <img src={newalbum.images[0].url} alt="artits" />

                </div>
            </Link>
            <div
                className='play__icon--container'
                onClick={() => {
                    console.log("play")
                    console.log(newalbum.uri)
                    setAnUri(newalbum.uri)
                }}
            >

                <FiPlay className='play__icon' />
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