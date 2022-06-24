import React from "react";
import { Link } from "react-router-dom";
import "./widgetS.css";

// Helper Function
// import getEmployees from "../../helpers/selectors.js";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetS = (props) => {
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
              Employee Code: {props.employees[0].code}
            </div>
            <div className="widgetSmUserProfession">
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
              Employee Code: {props.employees[1].code}
            </div>
            <div className="widgetSmUserProfession">
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
              Employee Code: {props.employees[2].code}
            </div>
            <div className="widgetSmUserProfession">
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
              Employee Code: {props.employees[3].code}
            </div>
            <div className="widgetSmUserProfession">
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
              Employee Code: {props.employees[4].code}
            </div>
            <div className="widgetSmUserProfession">
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
        <li className="widgetSmListItem">
          <img
            src={props.employees[5].profile}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">
              Employee Code: {props.employees[5].code}
            </div>
            <div className="widgetSmUserProfession">
              {props.employees[5].profession}
            </div>
          </div>
          <Link to={"/employee/6"}>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img
            src={props.employees[6].profile}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">
              Employee Code: {props.employees[6].code}
            </div>
            <div className="widgetSmUserProfession">
              {props.employees[6].profession}
            </div>
          </div>
          <Link to={"/employee/7"}>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img
            src={props.employees[7].profile}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">
              Employee Code: {props.employees[7].code}
            </div>
            <div className="widgetSmUserProfession">
              {props.employees[7].profession}
            </div>
          </div>
          <Link to={"/employee/8"}>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="widgetSmListItem">
          <img
            src={props.employees[8].profile}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUsername">
              Employee Code: {props.employees[8].code}
            </div>
            <div className="widgetSmUserProfession">
              {props.employees[8].profession}
            </div>
          </div>
          <Link to={"/employee/9"}>
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
