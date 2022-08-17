import { React, useContext } from 'react'
import { UserContext } from '../UserContext';
import Sidebar from '../components/Sidebar';
import HomePageContent from "../components/HomePageContent";
import Header from '../components/Header';
import Player from '../components/Player';
import AlbumsTabs from '../components/AlbumsTabs';
import HomePageSlider from '../components/HomePageSlider';

import "../styles/homepage.css"
export const HomePage = () => {

    const { user, username } = useContext(UserContext);

    console.log(username);

    return (
        <div
            className="homepage--container"
        >
            <Sidebar />
            <HomePageContent />
            {/* <Header />
            <HomePageSlider />
            <AlbumsTabs />
            <Player /> */}
        </div>
    )
}

export default HomePage