/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-named-as-default */
import React from "react";
import Header from "./Header";

import Player from "./Player";
import HomePageSlider from "./HomePageSlider";
import AlbumsTabs from "./AlbumsTabs";
import MobileHeader from "./MobileHeader";

export const HomePageContent = () => {
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
            <HomePageSlider />
            <AlbumsTabs />

            <Player />
        </div>
    );
};

export default HomePageContent;
