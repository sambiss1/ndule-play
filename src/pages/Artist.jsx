import { React, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Player from '../components/Player';

import SpotifyWebApi from "spotify-web-api-js";

import LoadingData from '../components/LoadingData';


import "../styles/App.css";
import "../styles/homepage.css";
import "../styles/artistpage.css"
const Artist = ({ artirst }) => {
    const { id } = useParams();

    console.log(id)
    const navigate = useNavigate()

    const spotifyArtist = new SpotifyWebApi()

    console.log(localStorage.getItem("token"))

    spotifyArtist.setAccessToken(localStorage.getItem("token"))
    const [artist, setArtist] = useState([])
    const [artistTopTrack, setArtistTopTrack] = useState([])

    // let artist = []
    const getArtistInfo = async (art) => {
        try {
            const getSelectedArtist = await spotifyArtist.getArtist(id);
            localStorage.setItem("artist", JSON.stringify(getSelectedArtist));
            console.log(getSelectedArtist);
            setArtist(getSelectedArtist);

            console.log(artist);

        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getArtistInfo()
    }, [])

    const getTopTrack = async () => {
        const getArtistTopTrack = await spotifyArtist.getArtistTopTracks(id, "CD")
        console.log(getArtistTopTrack.tracks);
    }

    useEffect(() => {
        getTopTrack()
    }, [])


    return (
        <div
            className="homepage--container"
        >
            <Sidebar logout={() => {
                navigate("/login", { replace: true })
                window.localStorage.removeItem("token")
            }} />
            <div
                className="main__container"
            >
                <Header />
                {
                    artist.length <= 0 ? (<LoadingData />) :
                        <div
                            className="page__content"
                        >
                            <div
                                className="artist__cover--container"
                            >
                                <div
                                    className="artist__image--container"
                                >
                                    {
                                        artist.length <= 0 ? (<LoadingData />) : (<img src={artist.images[2].url} alt="artist cover" />)
                                    }
                                </div>
                                <div>
                                    <h3>{artist.name}</h3>
                                    <h4>{artist.followers.total} auditeurs mensuels</h4>
                                </div>
                            </div>
                            <h3
                                className="page__title"
                            >
                                Titres populaires
                            </h3>
                            <div
                                className="populars__tracks--container"
                            >

                            </div>

                        </div>
                }


                <Player />

            </div>
        </div>
    )
}

export default Artist