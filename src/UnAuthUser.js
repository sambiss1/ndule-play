/* eslint-disable arrow-body-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/function-component-definition */
import { React } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

export const UnAuthUser = () => {
    const token = localStorage.getItem("token");
    return (

        <Routes>
            <Route path="/" index element={<LoginPage />} />
            <Route path="/*" element={token ? <NotFound /> : <Navigate replace to="/" />} />
        </Routes>
    );
};

export default UnAuthUser;
