import React from "react";
import "./widgetS.css";

// Helper Function
// import getEmployees from "../../helpers/selectors.js";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetS = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Latest Employees</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername"></div>
            <div className="widgetSmUserProfession"></div>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetS;
