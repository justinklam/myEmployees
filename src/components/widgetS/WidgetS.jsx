import React from "react";
import { Link } from "react-router-dom";
import "./widgetS.css";

// Helper Function
// import getEmployees from "../../helpers/selectors.js";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetS = (props) => {
  console.log("widget props", props.employees);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Employee List - Quick Look</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src={props.employees[0].profile}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">
              {/* Name */}
              Employee Code: {props.employees[0].code}
            </div>
            <div className="widgetSmUserProfession">
              {/* Job */}
              {props.employees[0].profession}
            </div>
          </div>
          <Link to={"/employee/1"}>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img
            src={props.employees[1].profile}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">
              {/* Name */}
              Employee Code: {props.employees[1].code}
            </div>
            <div className="widgetSmUserProfession">
              {/* Job */}
              {props.employees[1].profession}
            </div>
          </div>
          <Link to={"/employee/2"}>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img
            src={props.employees[2].profile}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">
              {/* Name */}
              Employee Code: {props.employees[2].code}
            </div>
            <div className="widgetSmUserProfession">
              {/* Job */}
              {props.employees[2].profession}
            </div>
          </div>
          <Link to={"/employee/3"}>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img
            src={props.employees[3].profile}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">
              {/* Name */}
              Employee Code: {props.employees[3].code}
            </div>
            <div className="widgetSmUserProfession">
              {/* Job */}
              {props.employees[3].profession}
            </div>
          </div>
          <Link to={"/employee/4"}>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img
            src={props.employees[4].profile}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">
              {/* Name */}
              Employee Code: {props.employees[4].code}
            </div>
            <div className="widgetSmUserProfession">
              {/* Job */}
              {props.employees[4].profession}
            </div>
          </div>
          <Link to={"/employee/5"}>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default WidgetS;
