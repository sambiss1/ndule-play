/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-named-as-default */
import React from "react";


import HomePageSlider from "./HomePageSlider";
import AlbumsTabs from "./AlbumsTabs";




export const HomePageContent = () => {

    return (
        <div
            style={{
                left: "25%",
                position: "absolute",
                width: "75%",
                paddingBottom: "100px",
                paddingTop: "100px"
            }}
            className="homepage__content"
        >
           
            <HomePageSlider />
            <AlbumsTabs />



        </div>
    );
};

export default HomePageContent;
