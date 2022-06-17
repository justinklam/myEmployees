import React from "react";
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

const Employee = () => {
  return (
    <div className="employee">
      <div className="employeeTitleContainer">
        <h1 className="employeeTitle">Edit Employee</h1>
        <button className="employeeCreateButton">Create</button>
      </div>
      <div className="employeeContainer">
        <div className="employeeShow">
          <div className="employeeShowTop">
            <img
              src="https://images.pexels.com/photos/5468093/pexels-photo-5468093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="employeeShowImg"
            />
            <div className="employeeShowTopTitle">
              <span className="employeeShowUsername">Kyle Lowry</span>
              <span className="employeeShowUserProfession">
                Drywall Installer
              </span>
            </div>
          </div>
          <div className="employeeShowBottom">
            <span className="employeeShowBotTitle">Account Details</span>
            <div className="employeeShowInfo">
              <AccountCircleIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">Lowry</span>
            </div>
            <div className="employeeShowInfo">
              <AccountCircleIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">Kyle</span>
            </div>
            <div className="employeeShowInfo">
              <CameraAltIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">Profile</span>
            </div>
            <div className="employeeShowInfo">
              <EmailIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">user@mail.com</span>
            </div>
            <span className="employeeShowBotTitle">Employment Details</span>
            <div className="employeeShowInfo">
              <CodeIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">F100</span>
            </div>
            <div className="employeeShowInfo">
              <WorkIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">Drywall Installer</span>
            </div>
            <span className="employeeShowBotTitle">Location Details</span>
            <div className="employeeShowInfo">
              <LocationCityIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">Toronto</span>
            </div>
            <div className="employeeShowInfo">
              <ParkIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">Abacus</span>
            </div>
            <div className="employeeShowInfo">
              <AssignmentIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">True</span>
            </div>
          </div>
        </div>
        <div className="employeeUpdate">
          <span className="employeeUpdateTitle">Edit</span>
          <form className="employeeUpdateForm">
            <div className="employeeUpdateLeft">
              <div className="employeeUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Lowry"
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Kyle"
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Profile</label>
                <input
                  type="text"
                  placeholder="Profile"
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="user@mail.com"
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Code</label>
                <input
                  type="text"
                  placeholder="F100"
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Profession</label>
                <input
                  type="text"
                  placeholder="Drywall Installer"
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>City</label>
                <input
                  type="text"
                  placeholder="Toronto"
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Branch</label>
                <input
                  type="text"
                  placeholder="Abacus"
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Assigned</label>
                <input
                  type="text"
                  placeholder="True"
                  className="employeeUpdateInput"
                />
              </div>
            </div>
            <div className="employeeUpdateRight">
              <div className="employeeUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/5468093/pexels-photo-5468093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="employeeUpdateImg"
                />
                {/* targets the input id:file */}
                <label htmlFor="file">
                  <UploadFileIcon className="employeeUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="employeeUpdateBtn">Update Photo</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Employee;
