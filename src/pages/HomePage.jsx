/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
import { React, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import Sidebar from "../components/Sidebar";
import HomePageContent from "../components/HomePageContent";
import "../styles/homepage.css";

export const HomePage = () => {
    const { getNewRelease } = useContext(UserContext);

    useEffect(() => {
        getNewRelease();
    }, []);
    const navigate = useNavigate();
    return (<div className="homepage--container">
        <Sidebar
            logout={() => {
                navigate("/", { replace: true });
                window.localStorage.removeItem("token");
            }}
        />
        <HomePageContent />
    </div>);
};

export default HomePage;
