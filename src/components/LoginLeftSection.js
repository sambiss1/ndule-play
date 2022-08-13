import { React, useEffect } from 'react';

import Logo from "../images/Ndule-play-logo-final.png"



import "../styles/loginPage.css"

export const LoginLeftSection = () => {
    return (
        <>
            <div
                className="login__left--section"
            >
                <img src={Logo} alt="logo officiel" />
            </div>
        </>
    )
}

export default LoginLeftSection