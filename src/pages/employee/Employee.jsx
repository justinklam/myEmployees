import React from "react";
import { Link, useParams } from "react-router-dom";
import "./employee.css";

// MUI
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ParkIcon from "@mui/icons-material/Park";
import EmailIcon from "@mui/icons-material/Email";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const Employee = (props) => {
  const id = useParams().employeeId - 1;

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("handleUpdate");
  };

  return (
    <div className="employee">
      <div className="employeeTitleContainer">
        <h1 className="employeeTitle">Edit Employee</h1>
        <div className="employeeButtons">
          <Link to="/employees">
            <button className="employeeCreateButton">Employee List</button>
          </Link>
          <Link to="/newEmployee">
            <button className="employeeCreateButton">Add New</button>
          </Link>
        </div>
      </div>
      <div className="employeeContainer">
        <div className="employeeShow">
          <div className="employeeShowTop">
            <img
              src={props.employees[id].profile}
              alt=""
              className="employeeShowImg"
            />
            <div className="employeeShowTopTitle">
              <span className="employeeShowUsername">
                {props.employees[id].firstName} {props.employees[id].lastName}
              </span>
              <span className="employeeShowUserProfession">
                {/* Drywall Installer */}
                {props.employees[id].profession}
              </span>
            </div>
          </div>
          <div className="employeeShowBottom">
            <span className="employeeShowBotTitle">Account Details</span>
            <div className="employeeShowInfo">
              <AccountCircleIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                {/* Kyle */}
                {props.employees[id].firstName}
              </span>
            </div>
            <div className="employeeShowInfo">
              <AccountCircleIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                {/* Lowry */}
                {props.employees[id].lastName}
              </span>
            </div>
            <div className="employeeShowInfo">
              <CameraAltIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                {/* Profile */}
                {props.employees[id].profile}
              </span>
            </div>
            <div className="employeeShowInfo">
              <EmailIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                {/* user@mail.com */}
                {props.employees[id].email}
              </span>
            </div>
            <span className="employeeShowBotTitle">Employment Details</span>
            <div className="employeeShowInfo">
              <CodeIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                {/* F100 */}
                {props.employees[id].code}
              </span>
            </div>
            <div className="employeeShowInfo">
              <WorkIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                {/* Drywall Installer */}
                {props.employees[id].profession}
              </span>
            </div>
            <span className="employeeShowBotTitle">Location Details</span>
            <div className="employeeShowInfo">
              <LocationCityIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                {/* Toronto */}
                {props.employees[id].city}
              </span>
            </div>
            <div className="employeeShowInfo">
              <ParkIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                {/* Abacus */}
                {props.employees[id].branch}
              </span>
            </div>
            <div className="employeeShowInfo">
              <AssignmentIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                {/* True */}
                {props.employees[id].assigned}
              </span>
            </div>
          </div>
        </div>
        <div className="employeeUpdate">
          <span className="employeeUpdateTitle">Edit</span>
          <form className="employeeUpdateForm">
            <div className="employeeUpdateLeft">
              <div className="employeeUpdateItem">
                <label>First Name</label>
                <input
                  type="text"
                  // placeholder="Kyle"
                  placeholder={props.employees[id].firstName}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  // placeholder="Lowry"
                  placeholder={props.employees[id].lastName}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Profile</label>
                <input
                  type="text"
                  // placeholder="Profile"
                  placeholder={props.employees[id].profile}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  // placeholder="user@mail.com"
                  placeholder={props.employees[id].email}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Code</label>
                <input
                  type="text"
                  // placeholder="F100"
                  placeholder={props.employees[id].code}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Profession</label>
                <input
                  type="text"
                  // placeholder="Drywall Installer"
                  placeholder={props.employees[id].profession}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>City</label>
                <input
                  type="text"
                  // placeholder="Toronto"
                  placeholder={props.employees[id].city}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Branch</label>
                <input
                  type="text"
                  // placeholder="Abacus"
                  placeholder={props.employees[id].branch}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Assigned</label>
                <input
                  type="text"
                  // placeholder="True"
                  placeholder={props.employees[id].assigned}
                  className="employeeUpdateInput"
                />
              </div>
            </div>
            <div className="employeeUpdateRight">
              <div className="employeeUpdateUpload">
                <img
                  src={props.employees[id].profile}
                  alt=""
                  className="employeeUpdateImg"
                />
                {/* targets the input id:file */}
                <label htmlFor="file">
                  <UploadFileIcon className="employeeUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button
                className="employeeUpdateBtn"
                onClick={(e) => handleUpdate(e)}
              >
                Update Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Employee;
