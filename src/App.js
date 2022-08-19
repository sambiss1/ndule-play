import { React, useEffect, useContext } from 'react';
import './styles/App.css';

import AuthUser from "./AuthUser";
import UnAuthUser from './UnAuthUser';
import { UserContext } from './UserContext';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Albums from './pages/Albums';
import SingleAlbum from './pages/SingleAlbum';
import SingleSong from './pages/SingleSong';
import Artist from './pages/Artist';
import Genres from './pages/Genres';
import PlayList from './pages/PlayList';
import RecentlyPlayed from './pages/RecentlyPlayed';
import Liked from './pages/Liked';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';


function App({ hideLoader }) {

  const { user, username } = useContext(UserContext);
  useEffect(hideLoader, [])

  const actual__token = window.localStorage.getItem("token")


  console.log(user.auth)
  return (
    /* <UnAuthUser /> */
    <BrowserRouter>
      <Routes>
        {!actual__token ?
          <Route path="/" element={<UnAuthUser />} /> :
          <>
            <Route path="/albums" element={<Albums />}></Route>
            <Route path="/album/:id" element={<SingleAlbum />} />
            <Route path="/track/:id" element={<SingleSong />} />
            <Route path="/artist/:id" element={<Artist />} />
            <Route path="genres" element={<Genres />} />
            <Route path="/playlist" element={<PlayList />} />
            <Route path="/recently-played" element={<RecentlyPlayed />}> </Route>
            <Route path="/liked" element={<Liked />} ></Route>
            <Route path="/login" element={<UnAuthUser />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" index element={<HomePage />} />
          </>
        }


      </Routes>
      <Outlet />
    </BrowserRouter>

  )
}

export default App;
