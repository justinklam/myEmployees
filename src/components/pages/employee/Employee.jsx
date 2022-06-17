import React from "react";
import "./employee.css";

const Employee = () => {
  return (
    <div className="employee">
      <div className="employeeTitleContainer">
        <h1 className="employeeTitle">Edit Employee</h1>
        <button className="employeeAddButton">Create</button>
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
          <div className="employeeShowBottom"></div>
        </div>
        <div className="employeeUpdate"></div>
      </div>
    </div>
  );
};

export default Employee;
