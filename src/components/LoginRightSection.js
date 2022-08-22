/* eslint-disable react/button-has-type */
import { React, useContext } from "react";

import { FaSpotify } from "react-icons/fa";
import { UserContext } from "../UserContext";

export function LoginRightSection() {
  const { handleLogin, logout } = useContext(UserContext);
  return (
    <div>
      <div>
        <div>
          <button onClick={handleLogin}>
            <FaSpotify />
            Continuez avec Spotify
          </button>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default LoginRightSection;
