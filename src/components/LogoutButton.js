/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { React, useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { UserContext } from "../UserContext";

import "../styles/navigationmenu.css";

export function LogoutButton() {
  const { logout } = useContext(UserContext);

  return (
    <div
      className="logout__button"
      onClick={() => {
        logout();
        window.location.replace("/");
      }}
    >
      <BiLogOut className="logout__button--icon" />
      <span>Déconnexion</span>
    </div>
  );
}

export default LogoutButton;
