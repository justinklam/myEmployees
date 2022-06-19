import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
// import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper"></div>
      <div className="sidebarMenu"></div>
      <h3 className="sidebarTitle">Dashboard</h3>
      <ul className="sidebarList">
        <Link to="/" className="link">
          <li className="sidebarListIcons active">
            <HomeIcon className="sidebarIcon" />
            Home
          </li>
        </Link>
      </ul>
      <div className="sidebarMenu"></div>
      <h3 className="sidebarTitle">Personnel</h3>
      <ul className="sidebarList">
        <Link to="/employees" className="link">
          <li className="sidebarListIcons">
            <PersonIcon className="sidebarIcon" />
            Search
          </li>
        </Link>

        <Link to="/newEmployee" className="link">
          <li className="sidebarListIcons">
            <PersonAddAlt1Icon className="sidebarIcon" />
            Add
          </li>
        </Link>

        {/* <Link to="/removeEmployee" className="sideBarLink">
          <li className="sidebarListIcons">
            <PersonRemoveAlt1Icon className="sidebarIcon" />
            Remove
          </li>
        </Link> */}
      </ul>
      <div className="sidebarMenu"></div>
      <h3 className="sidebarTitle">Admin</h3>
      <ul className="sidebarList">
        <Link to="/settings" className="link">
          <li className="sidebarListIcons">
            <SettingsIcon className="sidebarIcon" />
            Settings
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
