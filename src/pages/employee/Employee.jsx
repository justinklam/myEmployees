import React, { useEffect, useState } from "react";
import axios from "axios";
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

const Employee = () => {
  const id = useParams().employeeId - 1;
  const [emps, setEmps] = useState([]);
  console.log("useParams id---", id);

  useEffect(() => {
    axios
      .get("//localhost:8080/api/employees")
      .then((res) => {
        console.log("api-data", res.data);
        setEmps(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  // console.log("emps state", emps);
  console.log("emps[id]---", emps[id]);

  return (
    <div className="employee">
      <div className="employeeTitleContainer">
        <h1 className="employeeTitle">Edit Employee</h1>
        <Link to="/newEmployee">
          <button className="employeeCreateButton">Add New</button>
        </Link>
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
              <span className="employeeShowUsername">
                Kyle Lowry
                {/* {emps[id].firstName} {emps[id].lastName} */}
              </span>
              <span className="employeeShowUserProfession">
                Drywall Installer
                {/* {emps[id].profession}  */}
              </span>
            </div>
          </div>
          <div className="employeeShowBottom">
            <span className="employeeShowBotTitle">Account Details</span>
            <div className="employeeShowInfo">
              <AccountCircleIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                Kyle
                {/* {emps[id].firstName} */}
              </span>
            </div>
            <div className="employeeShowInfo">
              <AccountCircleIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                Lowry
                {/* {emps[id].lastName} */}
              </span>
            </div>
            <div className="employeeShowInfo">
              <CameraAltIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                Profile
                {/* {emps[id].profile} */}
              </span>
            </div>
            <div className="employeeShowInfo">
              <EmailIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                user@mail.com
                {/* {emps[id].email} */}
              </span>
            </div>
            <span className="employeeShowBotTitle">Employment Details</span>
            <div className="employeeShowInfo">
              <CodeIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                F100
                {/* {emps[id].code} */}
              </span>
            </div>
            <div className="employeeShowInfo">
              <WorkIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                Drywall Installer
                {/* {emps[id].profession} */}
              </span>
            </div>
            <span className="employeeShowBotTitle">Location Details</span>
            <div className="employeeShowInfo">
              <LocationCityIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                Toronto
                {/* {emps[id].city} */}
              </span>
            </div>
            <div className="employeeShowInfo">
              <ParkIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                Abacus
                {/* {emps[id].branch} */}
              </span>
            </div>
            <div className="employeeShowInfo">
              <AssignmentIcon className="employeeShowIcon" />
              <span className="employeeShowInfoTitle">
                True
                {/* {emps[id].assigned} */}
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
                  placeholder="Kyle"
                  // placeholder={emps[id].firstName}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Lowry"
                  // placeholder={emps[id].lastName}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Profile</label>
                <input
                  type="text"
                  placeholder="Profile"
                  // placeholder={emps[id].profile}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="user@mail.com"
                  // placeholder={emps[id].email}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Code</label>
                <input
                  type="text"
                  placeholder="F100"
                  // placeholder={emps[id].code}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Profession</label>
                <input
                  type="text"
                  placeholder="Drywall Installer"
                  // placeholder={emps[id].profession}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>City</label>
                <input
                  type="text"
                  placeholder="Toronto"
                  // placeholder={emps[id].city}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Branch</label>
                <input
                  type="text"
                  placeholder="Abacus"
                  // placeholder={emps[id].branch}
                  className="employeeUpdateInput"
                />
              </div>
              <div className="employeeUpdateItem">
                <label>Assigned</label>
                <input
                  type="text"
                  placeholder="True"
                  // placeholder={emps[id].assigned}
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
              <button className="employeeUpdateBtn">Update Employee</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Employee;
