import React from "react";
import "./Preloader.css";

const Preloader = ({ preloaderActive }) => {
  return (
    <div className={`preloader ${preloaderActive && "preloader_active"}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
