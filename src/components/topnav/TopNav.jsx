import React from "react";
import { Link } from "react-router-dom";
import "./topNav.css";

// Icons
import SettingsIcon from "@mui/icons-material/Settings";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
  return (
    <div className="topnav">
      <div className="topnavWrapper">
        <div className="topLeft">
          <span className="logo">
            <a href="/" className="logoLink">
              myEmployees
            </a>
          </span>
        </div>
        <div className="topRight">
          <div className="topnavIconContainer">
            <Link to="/employees" className="link">
              <SearchIcon className="topnavIcon" />
            </Link>
          </div>
          <div className="topnavIconContainer">
            <Link to="/settings" className="link">
              <SettingsIcon className="topnavIcon" />
            </Link>
          </div>
          <div className="topnavIconContainer">
            <LightbulbIcon className="topnavIcon" />
          </div>
          <img
            src="https://images.pexels.com/photos/1049764/pexels-photo-1049764.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
