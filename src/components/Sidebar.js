import React from 'react';
import "../styles/sidebar.css";
import LogoContainer from './LogoContainer';
import NavigationMenu from './NavigationMenu';
import LogoutButton from './LogoutButton';


export const Sidebar = ({ logout }) => {
    return (
        <>
            <div
                className="sidebar--container"
            >
                <LogoContainer />
                <NavigationMenu />
                <LogoutButton logout={logout} />
            </div>

        </>
    )
}

export default Sidebar