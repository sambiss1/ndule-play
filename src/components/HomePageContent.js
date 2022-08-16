import React from 'react';
import Header from './Header';

import Player from './Player';
import HomePageSlider from './HomePageSlider';
import AlbumsTabs from './AlbumsTabs';

export const HomePageContent = () => {
    return (
        <div
            style={{
                left: "25%",
                position: "absolute",
                width: "75%",
                paddingBottom: "300px"
            }}

        >
            <Header />
            <HomePageSlider />
            <AlbumsTabs />

            <Player />
        </div>
    )
}

export default HomePageContent