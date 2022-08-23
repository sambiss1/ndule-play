/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
import { React } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import "../styles/App.css";

export const Albums = () => {
  const navigate = useNavigate();
  return (
    <>
      <Sidebar logout={() => navigate("/login")} />
      <div className="main__container">
        <div className="page__content">
          <h3 className="page__title">Albums</h3>
        </div>
      </div>
    </>
  );
};

export default Albums;
