import { React, useContext } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import { UserContext } from './UserContext';

const AuthUser = ({ newUser, setNewUser }) => {

    const { user, login, logout } = useContext(UserContext);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
            <Outlet />
        </>
    )
}

export default AuthUser