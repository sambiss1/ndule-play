/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import { React } from "react";

import UserTest from "../images/user-test.png";

import "../styles/userlogged.css";

export const UserLogged = () => {
  return (
    <div className="userlooged--container">
      <div className="usertest__image--container">
        <img
          src={UserTest}
          alt="user avatar"
          className="usertest__image--avatar"
        />
      </div>

      <div>
        <h2>{window.localStorage.getItem("user__logged")}</h2>
      </div>
    </div>
  );
};

export default UserLogged;
