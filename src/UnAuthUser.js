/* eslint-disable import/no-named-as-default */
/* eslint-disable react/function-component-definition */
import { React } from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

export const UnAuthUser = () => (
  <Routes>
    <Route path="/" index element={<LoginPage />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

export default UnAuthUser;
