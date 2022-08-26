/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
import { React, useContext, useEffect } from "react";

import { UserContext } from "../UserContext";

import HomePageContent from "../components/HomePageContent";
import "../styles/homepage.css";
import "../styles/App.css";

export const HomePage = () => {
    const { getNewRelease } = useContext(UserContext);

    useEffect(() => {
        getNewRelease();
    }, []);

    const REDIRECT_URI_DEV_MODE = process.env.REACT_APP_DEV_MODE_REDIRECT_URI;


    const displayEnvVar = () => {
        console.log(REDIRECT_URI_DEV_MODE);
    };

    displayEnvVar();

    return (
        <div className="homepage--container">
            <HomePageContent />
        </div>);
};

export default HomePage;
