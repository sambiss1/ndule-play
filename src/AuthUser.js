import { React, useContext } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFound from "./pages/NotFound";
import Albums from "./pages/Albums";
import Genres from "./pages/Genres";
import PlayList from './pages/PlayList';
import RecentlyPlayed from './pages/RecentlyPlayed';
import Liked from './pages/Liked';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import SingleAlbum from './pages/SingleAlbum';
import Artist from './pages/Artist';


import SingleSong from './pages/SingleSong';

import { UserContext } from './UserContext';
import { UserProvider } from "./UserContext"

const AuthUser = () => {
    const { user, login, logout } = useContext(UserContext);
    return (
        <UserProvider>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/albums" element={<Albums />}></Route>
                <Route path="/album/:id" element={<SingleAlbum />} />
                <Route path="/track/:id" element={<SingleSong />} />
                <Route path="/artist/:id" element={<Artist />} />
                <Route path="genres" element={<Genres />} />
                <Route path="/playlist" element={<PlayList />} />
                <Route path="/recently-played" element={<RecentlyPlayed />}> </Route>
                <Route path="/liked" element={<Liked />} ></Route>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<HomePage />} />
                <Player />
            </Routes>
        </UserProvider>
    )
}

export default AuthUser