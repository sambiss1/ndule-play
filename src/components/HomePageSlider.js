/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { React, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import spotifyApi from "../utils";

export const HomePageSlider = () => {
  const { userID } = useContext(UserContext);

  const [propotionalPlaylist, setPropotentialPlaylist, setAnUri, setPlay] = useState([]);


  useEffect(() => {
    const getAPlaylist = async () => {
      try {
        const getOneUserPlaylist = await spotifyApi.getUserPlaylists({ userID, limit: 1 });
        setPropotentialPlaylist(getOneUserPlaylist.items);
      } catch (error) {
        console.log(error);
      }
    };

    getAPlaylist();

  }, []);


  return (
    <div className="homepage__cover--container">
      <h3>Streamez à fond pour</h3>
      <p><span>Plus de <i>fun</i></span>, <span>plus de <i>vibes</i></span></p>

      {propotionalPlaylist.map((playlist) => playlist.uri
        &&
        (<button className="play__recent__playlist" onClick={() => {
        setAnUri(playlist.uri);
        setPlay(true);
          console.log(playlist.uri);

        }}>Jouez une playlist</button>)

      )

      }
    </div>
  );
};

export default HomePageSlider;
