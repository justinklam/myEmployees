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
            src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            src="https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            src="https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            src="https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            src="https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            src="https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            src="https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
