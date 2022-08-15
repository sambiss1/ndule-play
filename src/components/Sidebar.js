import React from 'react';
import "../styles/sidebar.css";
import LogoContainer from './LogoContainer';
import NavigationMenu from './NavigationMenu'


export const Sidebar = () => {
    return (
        <>
            <div
                className="sidebar--container"
            >
                <LogoContainer />
                <NavigationMenu />
            </div>

        </>
    )
}

export default Sidebar