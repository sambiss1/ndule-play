import { React, useContext } from 'react'
import { UserContext } from '../UserContext';
import Sidebar from '../components/Sidebar';
import HomePageContent from "../components/HomePageContent";


import "../styles/homepage.css"
export const HomePage = () => {

    const { user, username, login, handleLogin, logout, allAlbums } = useContext(UserContext);

    console.log(`New releases albums : ${allAlbums}`);

    return (
        <div
            className="homepage--container"
        >
            <Sidebar />
            <HomePageContent />
        </div>
    )
}

export default HomePage