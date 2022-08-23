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

    return (<div className="homepage--container">
        <HomePageContent />
    </div>);
};

export default HomePage;
