import React from 'react';
import Header from './Header';

import Player from './Player';
import HomePageSlider from './HomePageSlider';

export const HomePageContent = () => {
    return (
        <div
            style={{
                left: "25%",
                position: "absolute",
                width: "75%"
            }}

        >
            <Header />
            <HomePageSlider />
            <HomePageSlider />
            <Player />
        </div>
    )
}

export default HomePageContent