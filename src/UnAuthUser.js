import { React, useContext } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFound from "./pages/NotFound";
import Albums from "./pages/Albums";
import Genres from "./pages/Genres";
import PlayList from './pages/PlayList';
import RecentlyPlayed from './pages/RecentlyPlayed';
import Liked from "./pages/Liked";

import { UserContext } from './UserContext';
import { UserProvider } from "./UserContext"
import SingleAlbum from './pages/SingleAlbum';
import SingleSong from './pages/SingleSong';
import Artist from './pages/Artist';


export const UnAuthUser = ({ newUser, setNewUser }) => {

    const { user, login, logout } = useContext(UserContext);

    return (
        <Routes>
            <Route path="/" index element={<LoginPage />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>

    )
}

export default UnAuthUser