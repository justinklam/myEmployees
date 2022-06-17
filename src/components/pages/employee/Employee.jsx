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
        <div className="employeeShow"></div>
        <div className="employeeUpdate"></div>
      </div>
    </div>
  );
};

export default Employee;
