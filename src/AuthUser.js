import { React, useContext } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import { UserContext } from './UserContext';

const AuthUser = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage user={user} />} />
                    <Route path="/login" element={<LoginPage user={user} />} />
                </Routes>
            </BrowserRouter>
            <Outlet />
        </>
    )
}

export default AuthUser