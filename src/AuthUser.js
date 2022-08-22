/* eslint-disable import/no-named-as-default */
import { React } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Albums from "./pages/Albums";
import Genres from "./pages/Genres";
import PlayList from "./pages/PlayList";
import RecentlyPlayed from "./pages/RecentlyPlayed";
import Liked from "./pages/Liked";
import Player from "./components/Player";
import SingleAlbum from "./pages/SingleAlbum";
import Artist from "./pages/Artist";

import SingleSong from "./pages/SingleSong";

import { UserProvider } from "./UserContext";

function AuthUser() {
  return (
    <UserProvider>
      <Routes>
        <Player />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/album/:id" element={<SingleAlbum />} />
        <Route path="/track/:id" element={<SingleSong />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="genres" element={<Genres />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/recently-played" element={<RecentlyPlayed />}>
          {" "}
        </Route>
        <Route path="/liked" element={<Liked />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </UserProvider>
  );
}

export default AuthUser;
