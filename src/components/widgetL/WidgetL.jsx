import React from "react";
import { Link } from "react-router-dom";

import "./widgetL.css";

// MUI
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ParkIcon from "@mui/icons-material/Park";
import EmailIcon from "@mui/icons-material/Email";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";

const WidgetL = (props) => {
  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">Quick Look</span>
      <div className="widgetLgButtons">
        <Link to="/employees">
          <button className="widgetLgButton">Employee List</button>
        </Link>
        <Link to="/employee/1">
          <button className="widgetLgButton">Edit</button>
        </Link>
      </div>
      <div className="widgetLgContainer">
        <div className="widgetLgShow">
          <div className="widgetLgShowTop">
            <img
              src={props.employees[0].profile}
              alt=""
              className="widgetLgShowImg"
            />
            <div className="widgetLgShowTopTitle">
              <span className="widgetLgShowUsername">
                {props.employees[0].firstName} {props.employees[0].lastName}
              </span>
              <span className="widgetLgShowUserProfession">
                {props.employees[0].profession}
              </span>
            </div>
          </div>
          <div className="widgetLgShowBottom">
            <span className="widgetLgShowBottomTitle">Account Details</span>
            <div className="widgetLgShowInfo">
              <AccountCircleIcon className="widgetLgShowIcon" />
              <span className="widgetLgShowInfoTitle">
                {props.employees[0].firstName}
              </span>
            </div>
            <div className="widgetLgShowInfo">
              <AccountCircleIcon className="widgetLgShowIcon" />
              <span className="widgetLgShowInfoTitle">
                {props.employees[0].lastName}
              </span>
            </div>
            <div className="widgetLgShowInfo">
              <CameraAltIcon className="widgetLgShowIcon" />
              <span className="widgetLgShowInfoTitle">
                {props.employees[0].profile}
              </span>
            </div>
            <div className="widgetLgShowInfo">
              <EmailIcon className="widgetLgShowIcon" />
              <span className="widgetLgShowInfoTitle">
                {props.employees[0].email}
              </span>
            </div>
            <span className="widgetLgShowBottomTitle">Employment Details</span>
            <div className="widgetLgShowInfo">
              <CodeIcon className="widgetLgShowIcon" />
              <span className="widgetLgShowInfoTitle">
                {props.employees[0].code}
              </span>
            </div>
            <div className="widgetLgShowInfo">
              <WorkIcon className="widgetLgShowIcon" />
              <span className="widgetLgShowInfoTitle">
                {props.employees[0].profession}
              </span>
            </div>
            <span className="widgetLgShowBottomTitle">Location Details</span>
            <div className="widgetLgShowInfo">
              <LocationCityIcon className="widgetLgShowIcon" />
              <span className="widgetLgShowInfoTitle">
                {props.employees[0].city}
              </span>
            </div>
            <div className="widgetLgShowInfo">
              <ParkIcon className="widgetLgShowIcon" />
              <span className="widgetLgShowInfoTitle">
                {props.employees[0].branch}
              </span>
            </div>
            <div className="widgetLgShowInfo">
              <AssignmentIcon className="widgetLgShowIcon" />
              <span className="widgetLgShowInfoTitle">
                {props.employees[0].assigned}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetL;
