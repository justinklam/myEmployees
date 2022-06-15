import React from "react";
import "./topNav.css";

// Icons
import SettingsIcon from "@mui/icons-material/Settings";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const TopBar = () => {
  return (
    <div className="topnav">
      <div className="topnavWrapper">
        <div className="topLeft">
          <span className="logo">myEmployees</span>
        </div>
        <div className="topRight">
          <div className="topnavIconContainer">
            <SettingsIcon className="topnavIcon" />
          </div>
          <div className="topnavIconContainer">
            <LightbulbIcon className="topnavIcon" />
          </div>
          <img
            src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
