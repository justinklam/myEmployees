import React from "react";
import "./sidebar.css";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper"></div>
      <div className="sidebarMenu"></div>
      <h3 className="sidebarTitle">Dashboard</h3>
      <ul className="sidebarList">
        <li className="sidebarListIcons active">
          <HomeIcon className="sidebarIcon" />
          Home
        </li>
      </ul>
      <div className="sidebarMenu"></div>
      <h3 className="sidebarTitle">Personnel</h3>
      <ul className="sidebarList">
        <li className="sidebarListIcons">
          <PersonIcon className="sidebarIcon" />
          Search
        </li>
        <li className="sidebarListIcons">
          <PersonAddAlt1Icon className="sidebarIcon" />
          Add
        </li>
        <li className="sidebarListIcons">
          <PersonRemoveAlt1Icon className="sidebarIcon" />
          Remove
        </li>
      </ul>
      <div className="sidebarMenu"></div>
      <h3 className="sidebarTitle">Admin</h3>
      <ul className="sidebarList">
        <li className="sidebarListIcons">
          <SettingsIcon className="sidebarIcon" />
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
