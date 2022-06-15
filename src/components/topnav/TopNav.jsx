import React from "react";
import "./topNav.css";

const TopBar = () => {
  return (
    <div className="topnav">
      <div className="topnavWrapper">
        <div className="topLeft">
          <span className="logo">myEmployees</span>
        </div>
        <div className="topRight">Right</div>
      </div>
    </div>
  );
};

export default TopBar;
