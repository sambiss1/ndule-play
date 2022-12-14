/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
import React from "react";

import LoginLeftSection from "../components/LoginLeftSection";

import LoginRightSection from "../components/LoginRightSection";

import "../styles/loginPage.css";

export const LoginPage = () => {
  return (
    <div className="login__page--container">
      <LoginLeftSection />
      <LoginRightSection />
    </div>
  );
};

export default LoginPage;
