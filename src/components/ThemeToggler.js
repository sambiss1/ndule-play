import React from "react";
import { BsMoon } from "react-icons/bs";
import "../styles/themetoggle.css";

export const ThemeToggler = () => {
  return (
    <div className="themetoogler--container">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round">{/* <BsMoon /> */}</span>
      </label>
    </div>
  );
};

export default ThemeToggler;
