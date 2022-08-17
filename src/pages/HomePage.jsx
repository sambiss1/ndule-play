import { React, useContext } from 'react'
import { UserContext } from '../UserContext';
import Sidebar from '../components/Sidebar';
import HomePageContent from "../components/HomePageContent";
import Header from '../components/Header';
import Player from '../components/Player';
import AlbumsTabs from '../components/AlbumsTabs';
import HomePageSlider from '../components/HomePageSlider';
import { useNavigate } from 'react-router-dom';

import "../styles/homepage.css"
export const HomePage = () => {

    const { user, username } = useContext(UserContext);

    console.log(username);

    const navigate = useNavigate();
    return (
        <div
            className="homepage--container"
        >
            <Sidebar logout={() => navigate("/login")} />
            <HomePageContent />

        </div>
    )
}

export default HomePage