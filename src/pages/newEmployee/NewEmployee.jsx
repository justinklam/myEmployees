import React from "react";
import "./newEmployee.css";

const NewEmployee = () => {
  return (
    <div className="newEmployee">
      <h1 className="newEmployeeTitle">New Employee</h1>
      <form className="newEmployeeForm">
        <div className="newEmployeeItem">
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
        </div>
        <div className="newEmployeeItem">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>
      </form>
    </div>
  );
};

export default NewEmployee;
