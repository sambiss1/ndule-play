import { React, useContext } from 'react'
import { UserContext } from '../UserContext';
import Sidebar from '../components/Sidebar';
import HomePageContent from "../components/HomePageContent";


import "../styles/homepage.css"
export const HomePage = () => {

    const { user, login, handleLogin, logout } = useContext(UserContext);

    return (
        <div
            className="homepage--container"
        >

            <div>
                <button

                    onClick={logout}
                >Logout</button>
            </div>
            <Sidebar />
            <HomePageContent />
        </div>
    )
}

export default HomePage