import React from "react";
import "./sidebar.css";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
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
          Home
        </li>
        <li className="sidebarListIcons">
          <PersonIcon />
          Personnel
        </li>
        <li className="sidebarListIcons">
          <SettingsIcon />
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
