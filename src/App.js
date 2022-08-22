/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import { React, useEffect } from "react";
import "./styles/App.css";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import UnAuthUser from "./UnAuthUser";

import Albums from "./pages/Albums";
import SingleAlbum from "./pages/SingleAlbum";
import SingleSong from "./pages/SingleSong";
import Artist from "./pages/Artist";
import Genres from "./pages/Genres";
import PlayList from "./pages/PlayList";
import RecentlyPlayed from "./pages/RecentlyPlayed";
import Liked from "./pages/Liked";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";


function App({ hideLoader }) {
  useEffect(hideLoader, []);

  const actualToken = window.localStorage.getItem("token");

  return (
    <BrowserRouter>

      <Routes>
        {!actualToken ? (
          <Route path="/" element={<UnAuthUser />} />
        ) : (
          <>
            <Route path="/albums" element={<Albums />} />
            <Route path="/album/:id" element={<SingleAlbum />} />
            <Route path="/track/:id" element={<SingleSong />} />
            <Route path="/artist/:id" element={<Artist />} />
            <Route path="genres" element={<Genres />} />
            <Route path="/playlist" element={<PlayList />} />
            <Route path="/recently-played" element={<RecentlyPlayed />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/login" element={<UnAuthUser />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" index element={<HomePage />} />
          </>
        )}
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
