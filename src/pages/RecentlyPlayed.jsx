import { React, useContext, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Player from "../components/Player";
import { UserContext } from '../UserContext';
import RecentlyPlayedCard from '../components/RecentlyPlayedCard';

import { useNavigate, Link } from 'react-router-dom';




import "../styles/App.css";
import "../styles/albumitem.css";


export const RecentlyPlayed = () => {
    const { getRecentlyPlayed } = useContext(UserContext);

    const navigate = useNavigate()

    useEffect(() => {
        getRecentlyPlayed()
    }, [])

    let userRecentPlayed = JSON.parse(localStorage.getItem('user__recently__played'))

    console.log(userRecentPlayed.map((song) => song.track))
    return (
        <div
            className="homepage--container"
        >
            <Sidebar logout={() => navigate("/login")} />
            <div
                className="main__container"
            >
                <Header />

                <div
                    className="page__content"
                >
                    <h3
                        className="page__title"
                    >Joués récemments</h3>
                    <div
                        className="card__tabs--panel"
                    >
                        {userRecentPlayed.map((song) => song.track.name + song.track.artist + song.track.album.images[0].url
                            &&
                            <RecentlyPlayedCard
                                key={song.track.id}
                                props={song}
                            />
                        )

                        }

                    </div>

                </div>

                <Player />
            </div>

        </div>
    )
}

export default RecentlyPlayed