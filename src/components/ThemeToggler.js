<<<<<<< HEAD
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
=======
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

>>>>>>> feature/mobile-version
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
