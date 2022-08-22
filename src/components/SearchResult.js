/* eslint-disable import/no-named-as-default */
import { React, useContext } from "react";
import { UserContext } from "../UserContext";
import LoadingData from "./LoadingData";

function SearchResult() {
  const { artistSearched } = useContext(UserContext);

  console.log(artistSearched[0].images[0].url);
  return (
    <div>
      {artistSearched.length <= 0 ? (
        <LoadingData />
      ) : (
        <div>
          {artistSearched.map(
            (artist) =>
              artist.name + artist.images && (
                <div>
                  <h4>Meilleur Resultat</h4>
                  <h4>{artist.name}</h4>
                  <div>
                    <img src={artist.images.url} alt="cover result" />
                    {/* {artist.images[0].length <= 0 ? (<LoadingData />) : (
                                    <img src={artist.images[0].url} alt="Search result img" />
                                )} */}
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
