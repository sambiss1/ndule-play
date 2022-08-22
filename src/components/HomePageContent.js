/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-named-as-default */
import React, { useContext } from "react";
import Header from "./Header";

// import Player from "./Player";
import HomePageSlider from "./HomePageSlider";
import AlbumsTabs from "./AlbumsTabs";
import MobileHeader from "./MobileHeader";
import Player from "./Player";
import { UserContext } from "../UserContext";
import LoadingData from "./LoadingData";
import SearchResult from "./SearchResult";

export const HomePageContent = () => {
    const { search, termSearched } = useContext(UserContext);
    return (
        <div
            style={{
                left: "25%",
                position: "absolute",
                width: "75%",
                paddingBottom: "100px",
            }}
            className="homepage__content"
        >
            <Header />
            <MobileHeader />

            {search ? (
                <div className="page__content">
                    {termSearched.length <= 0 ? <LoadingData /> : <SearchResult />}
                </div>
            ) : (
                <>
                    <HomePageSlider />
                    <AlbumsTabs />
                </>
            )
            }

            <Player />
        </div>
    );
};

export default HomePageContent;
