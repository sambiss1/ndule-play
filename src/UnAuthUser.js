import { React, useContext } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'

import { UserContext } from './UserContext';


export const UnAuthUser = () => {

    const { user, login } = useContext(UserContext);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/" index element={<LoginPage user={user} login={login} />} />
                </Routes>
            </BrowserRouter>
            <Outlet />
        </>
    )
}

export default UnAuthUser