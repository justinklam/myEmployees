import React from "react";
import "./sidebar.css";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper"></div>
      <div className="sidebarMenu"></div>
      <h3 className="sideBarTitle">Dashboard</h3>
      <ul className="sidebarList">
        <li className="sidebarListIcons">
          <HomeIcon />
        </li>
        <li className="sidebarListIcons">
          <PersonIcon />
        </li>
        <li className="sidebarListIcons">
          <SettingsIcon />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
