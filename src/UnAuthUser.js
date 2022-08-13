import { React, useContext } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'

import { UserContext } from './UserContext';


export const UnAuthUser = ({ newUser, setNewUser }) => {

    const { user, login, logout } = useContext(UserContext);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage user={user} login={login} newUser={newUser} setNewUser={setNewUser} />} />
                    <Route path="/" index element={<LoginPage user={user} login={login} newUser={newUser} setNewUser={setNewUser} />} />
                </Routes>
            </BrowserRouter>
            <Outlet />
        </>
    )
}

export default UnAuthUser