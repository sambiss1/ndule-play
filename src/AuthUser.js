import { React, useContext } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFound from "./pages/NotFound";
import Albums from "./pages/Albums";
import Genres from "./pages/Genres";
import PlayList from './pages/PlayList';
import RecentlyPlayed from './pages/RecentlyPlayed';
import Liked from './pages/Liked';

import { UserContext } from './UserContext';

const AuthUser = () => {
    const { user, login, logout } = useContext(UserContext);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/albums" element={<Albums />}
                    >

                    </Route>
                    <Route path="/genres" element={<Genres logout={logout} />} />
                    <Route path="/playlist" element={<PlayList />} />
                    <Route
                        path="/recently-played" element={<RecentlyPlayed />}
                    >
                    </Route>
                    <Route
                        path="/liked" element={<Liked />}
                    >

                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Outlet />
        </>
    )
}

export default AuthUser