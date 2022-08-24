/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import { React, useContext, useEffect } from "react";
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
import SearchPage from "./pages/SearchPage";

import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

import MobileNavigation from "./components/MobileNavigation";
import MobileHeader from "./components/MobileHeader";
import { UserContext } from "./UserContext";
import SearchBar from "./components/SearchBar";
import UserLogged from "./components/UserLogged";
import PlayListDetailled from "./pages/PlayListDetailled";



function App({ hideLoader }) {
  useEffect(hideLoader, []);

  const { getMyAccount, createToken } = useContext(UserContext);
  createToken();
  getMyAccount();
  const actualToken = window.localStorage.getItem("token");


  return (
    <BrowserRouter>
      {actualToken ? <Sidebar /> : null}
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
            <Route path="/playlist/:id" element={<PlayListDetailled />} />
            <Route path="/recently-played" element={<RecentlyPlayed />} />
            <Route path="/liked" element={<Liked />} />
            {/* <Route path="/login" element={<UnAuthUser />} /> */}
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" index element={<HomePage />} />
          </>
        )}
      </Routes>
      {actualToken ? (<div className="main__container">
        <MobileHeader />
        <div className="header--container">
          <SearchBar />

          <UserLogged />
        </div>
        <div className="mobile__search--form">
          <SearchBar />
        </div>
        <Player />
        <MobileNavigation />
      </div>
      ) : null}
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
